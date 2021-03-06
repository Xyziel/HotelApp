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


    @CrossOrigin(origins ="*")
    @GetMapping("/admin/getAllUsers")
    ResponseEntity<List<User>> getAllUsers()
    {
        return ResponseEntity.ok(userRepo.findAllUsers());
    }






//    @PostMapping("/hej")
//    ResponseEntity<String> test(@RequestBody String test)
//    {
////        HttpHeaders responseHeaders = new HttpHeaders();
////        responseHeaders.set("Access-Control-Allow-Origin","*");
//
//        return ResponseEntity.status(HttpStatus.OK).body(test);
//    }

//    @GetMapping("/user/check")
//    ResponseEntity<User> getUserByUserName(@RequestBody String userName)
//    {
//        User user = userRepo.findUserByUserName(userName);
//        return ResponseEntity.ok().body(user);
//    }

    @PostMapping("/user/check")
    ResponseEntity<User> getUserByUserName(@RequestBody String userName)
    {
        User user = userRepo.findUserByUserName(userName);
        return ResponseEntity.ok().body(user);
    }


    @CrossOrigin(origins = "*")
    @PatchMapping("/admin/updateUserRole")
    ResponseEntity<?> updateUserRoleByUserName(@RequestParam("userName") String userName,@RequestParam("role") String role)
    {
        User user = userRepo.findUserByUserName(userName);
        if(user!=null)
        {
            userRepo.updateUserRoleById(user.getUserId(), Integer.valueOf(role));
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);

    }

    @DeleteMapping("/admin")
    ResponseEntity<?> deleteUserById(@RequestParam("userName") String userName)
    {
        User user = userRepo.findUserByUserName(userName);
        if(user!=null)
        {
            userRepo.deleteUserByUserId(user.getUserId());
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }







}