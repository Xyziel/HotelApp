package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.repository.RoleRepo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleController
{
    private final RoleRepo roleRepo;

    public RoleController(RoleRepo roleRepo)
    {
        this.roleRepo=roleRepo;
    }


//    @GetMapping("/${name}")
//    public ResponseEntity<Role> readRoleByName(@PathVariable String name)
//    {
//        return roleRepo.findByName(name).
//                map(role -> ResponseEntity.ok(role)).
//                orElse(ResponseEntity.notFound().build());
//    }
//
//    @PostMapping
//    public ResponseEntity<?> createRole(@RequestBody  Role role)
//    {
//        Role result = roleRepo.save(role);
//        URI location = URI.create(new String("/roles/"+ result.getRoleId()));
//        return ResponseEntity.created(location).body(result);
//    }




}