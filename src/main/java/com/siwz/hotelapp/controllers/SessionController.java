package com.siwz.hotelapp.controllers;


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
import java.util.List;

@RestController
public class SessionController
{
    public SessionController()
    {

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
}
