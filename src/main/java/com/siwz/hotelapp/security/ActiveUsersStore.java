package com.siwz.hotelapp.security;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ActiveUsersStore
{
    public List<String> users;


    public ActiveUsersStore()
    {
        this.users=new ArrayList<String>();
    }

    public List<String> getUsers()
    {
        return users;
    }

    public void setUsers(List<String> users)
    {
        this.users = users;
    }
}
