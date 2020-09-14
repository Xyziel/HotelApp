package com.siwz.hotelapp.controllers;

//import com.siwz.hotelapp.model.entity.User;

import com.siwz.hotelapp.model.entity.Role;
import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.RoleRepo;
import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;

import javax.transaction.Transactional;
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
//        if(userRepo.findUserByUserName(user.getUserName())!=null)
//        {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
        if((userRepo.findUserByUserName(user.getUserName())!=null) || (userRepo.findUserByEmail(user.getEmail())!=null))
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






    @PostMapping("/hej")
    ResponseEntity<String> test(@RequestBody String test)
    {
//        HttpHeaders responseHeaders = new HttpHeaders();
//        responseHeaders.set("Access-Control-Allow-Origin","*");

        return ResponseEntity.status(HttpStatus.OK).body(test);
    }

    @PostMapping("/user/check")
    ResponseEntity<User> getUserByUserName(@RequestBody String userName)
    {
        User user = userRepo.findUserByUserName(userName);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("")
    ResponseEntity<?> deleteUserById(@RequestParam("userName") String userName)
    {
        User user = userRepo.findUserByUserName(userName);
        System.out.println(user.getUserName());
        if(user!=null)
        {
            System.out.println(userName);
            System.out.println(user.getUserId());
            userRepo.deleteUserByUserId(user.getUserId());
            System.out.println(user.getUserId());
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }







}