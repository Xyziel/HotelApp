package com.siwz.hotelapp.service;

import com.siwz.hotelapp.model.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class MyUserDetails implements UserDetails
{
    private User user;
//    @Autowired
//    private RoleRepo roleRepo;

    public MyUserDetails(User user)
    {
        this.user=user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
//        List<Role> roles = roleRepo.findAll();
//        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
//
//        for(Role role : roles)
//        {
//            authorities.add(new SimpleGrantedAuthority(role.getName()));
//        }
//        return authorities;
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
        return authorities;
    }



    @Override
    public String getPassword()
    {
        return user.getPassword();
    }

    @Override
    public String getUsername()
    {
        return user.getUserName();
    }

    @Override
    public boolean isAccountNonExpired()
    {
        return true;
    }

    @Override
    public boolean isAccountNonLocked()
    {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired()
    {
        return true;
    }

    @Override
    public boolean isEnabled()
    {
        return true;
    }
}
