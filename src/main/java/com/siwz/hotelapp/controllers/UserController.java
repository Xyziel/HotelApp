package com.siwz.hotelapp.controllers;

//import com.siwz.hotelapp.model.entity.User;

import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
    private final UserRepo userRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(UserRepo userRepo,BCryptPasswordEncoder bCryptPasswordEncoder)
    {
        this.userRepo = userRepo;
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
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return ResponseEntity.ok().body(HttpStatus.OK);
    }

    @GetMapping("/user/check")
    ResponseEntity<User> getUserByUserName()
    {
        User user = userRepo.findUserByUserName("dupa");
        return ResponseEntity.ok().body(user);
    }







}
