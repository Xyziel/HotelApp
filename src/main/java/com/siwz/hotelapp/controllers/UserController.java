package com.siwz.hotelapp.controllers;

//import com.siwz.hotelapp.model.entity.User;

import com.siwz.hotelapp.model.entity.Role;
import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.RoleRepo;
import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


//TODO ten CORS trzeba bd sciagnac potem dla zabezpieczenia
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/users")
public class UserController
{
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

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
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/hej")
    String test(@RequestBody String test)
    {
        return test;
    }

    @GetMapping("/user/check")
    ResponseEntity<User> getUserByUserName()
    {
        User user = userRepo.findUserByUserName("dupa");
        return ResponseEntity.ok().body(user);
    }







}
