package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }


//    @PostMapping("/login")
//    ResponseEntity<?> login(@RequestBody String username, @RequestBody String password)
//    {
//
//    }

    @GetMapping("/user/check")
    ResponseEntity<User> getUserByUserName()
    {
        User user = userRepo.findUserByUserName("dupa");
        return ResponseEntity.ok().body(user);
    }





}
