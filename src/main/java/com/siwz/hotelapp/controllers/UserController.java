package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }
}
