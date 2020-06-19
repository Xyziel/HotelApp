package com.siwz.hotelapp.controllers;

//import com.siwz.hotelapp.model.entity.User;

import com.siwz.hotelapp.model.entity.Role;
import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.RoleRepo;
import com.siwz.hotelapp.model.repository.UserRepo;
import com.siwz.hotelapp.security.ActiveUsersStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;

import java.util.List;


//TODO ten CORS trzeba bd sciagnac potem dla zabezpieczenia
@RestController
@RequestMapping("/api/users")
//@CrossOrigin(origins = "http://localhost:3000/")
public class UserController
{
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private ActiveUsersStore activeUsersStore;

    public UserController(UserRepo userRepo,BCryptPasswordEncoder bCryptPasswordEncoder,RoleRepo roleRepo)
    {
        this.userRepo = userRepo;
        this.roleRepo= roleRepo;
        this.bCryptPasswordEncoder=bCryptPasswordEncoder;
    }


//    @PostMapping("/login")
//    ResponseEntity<?> login(@RequestBody String username, @RequestBody String password)
//    {
//
//    }

    @CrossOrigin(origins = "*")
    @PostMapping("/register")
    ResponseEntity<?> registerUser(@RequestBody User user)
    {
        if(userRepo.findUserByUserName(user.getUserName())!=null)
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        Role role = user.getRole();
        if(role == null)
        {
            user.setRole(roleRepo.findById(2));
        }
        userRepo.save(user);

//        HttpHeaders responseHeaders = new HttpHeaders();
//        responseHeaders.set("Access-Control-Allow-Origin","*");

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("isLoggedIn")
    ResponseEntity<List<String>> isLoggedIn()
    {
        //TODO sesja jest taka sama, pytanie czy zmienia sie przy logowaniu etc czy nie i jak to wykorzystac
        System.out.println(RequestContextHolder.currentRequestAttributes().getSessionId());
        List<String> users=activeUsersStore.getUsers();
        return ResponseEntity.ok(users);
    }


    @PostMapping("/hej")
    ResponseEntity<String> test(@RequestBody String test)
    {
//        HttpHeaders responseHeaders = new HttpHeaders();
//        responseHeaders.set("Access-Control-Allow-Origin","*");

        return ResponseEntity.status(HttpStatus.OK).body(test);
    }

    @GetMapping("/user/check")
    ResponseEntity<User> getUserByUserName()
    {
        User user = userRepo.findUserByUserName("dupa");
        return ResponseEntity.ok().body(user);
    }







}
