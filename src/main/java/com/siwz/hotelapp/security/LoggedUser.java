package com.siwz.hotelapp.security;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;
import java.util.List;

@Component
public class LoggedUser implements HttpSessionBindingListener
{
    private String username;
    private ActiveUsersStore activeUsersStore;


    public LoggedUser(String username, ActiveUsersStore activeUsersStore)
    {
        this.username = username;
        this.activeUsersStore = activeUsersStore;
    }

    public LoggedUser()
    {
    }

    @Override
    public void valueBound(HttpSessionBindingEvent event)
    {
        List<String> users = activeUsersStore.getUsers();
        LoggedUser loggedUser = (LoggedUser)event.getValue();
        if(!users.contains(loggedUser.getUsername()))
        {
            users.add(loggedUser.getUsername());
        }
    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent event)
    {
        List<String> users = activeUsersStore.getUsers();
        LoggedUser loggedUser = (LoggedUser)event.getValue();
        if(users.contains(loggedUser.getUsername()))
        {
            users.remove(loggedUser.getUsername());
        }
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public ActiveUsersStore getActiveUsersStore()
    {
        return activeUsersStore;
    }

    public void setActiveUsersStore(ActiveUsersStore activeUsersStore)
    {
        this.activeUsersStore = activeUsersStore;
    }
}
