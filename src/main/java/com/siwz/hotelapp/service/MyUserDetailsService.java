package com.siwz.hotelapp.service;

//import org.springframework.security.core.userdetails.UserDetails;

import com.siwz.hotelapp.model.entity.User;
import com.siwz.hotelapp.model.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class MyUserDetailsService implements UserDetailsService
{
    @Autowired
    private UserRepo userRepo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = userRepo.findUserByUserName(username);

        if(user==null)
        {
            throw new UsernameNotFoundException("Couldn't find user");
        }
        return new MyUserDetails(user);
    }


}
