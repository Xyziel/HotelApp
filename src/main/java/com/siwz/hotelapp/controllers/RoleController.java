package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.entity.Role;
import com.siwz.hotelapp.repository.RoleRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/roles")
public class RoleController
{
    private final RoleRepo roleRepo;

    public RoleController(RoleRepo roleRepo)
    {
        this.roleRepo=roleRepo;
    }


}