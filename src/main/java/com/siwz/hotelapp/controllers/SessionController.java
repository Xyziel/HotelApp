package com.siwz.hotelapp.controllers;


import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SessionController
{
    private final UserRepo userRepo;
    public SessionController(UserRepo userRepo)
    {
        this.userRepo=userRepo;
    }

    @GetMapping("/isLoggedIn")
    ResponseEntity<?> isUserLoggedIn()
    {
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        if(authentication.getPrincipal() instanceof UserDetails)
        {
            return ResponseEntity.ok(true);
        }


        return ResponseEntity.ok(false);
    }


    @GetMapping("getUserRole")
    ResponseEntity<?> getUserRole()
    {
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication.getName());
        String role="none";
        if(authentication.getPrincipal() instanceof UserDetails)
        {
            List<SimpleGrantedAuthority> authorityList= (List<SimpleGrantedAuthority>) authentication.getAuthorities();
            if(authorityList.isEmpty()==false)
            {
                role=authorityList.get(0).getAuthority();
                return ResponseEntity.ok(role);
            }
        }
        return ResponseEntity.ok("none");
    }

    @GetMapping("getUserId")
    ResponseEntity<Integer> getUserId()
    {
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        if(authentication.getPrincipal() instanceof UserDetails)
        {
            User user=userRepo.findUserByUserName(authentication.getName());
            return ResponseEntity.ok(user.getUserId());
        }
        return ResponseEntity.ok(-1);
    }



}
