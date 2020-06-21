package com.siwz.hotelapp.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


@Component
public class MyUrlLogoutHandler implements LogoutSuccessHandler
{
    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException
    {
//        System.out.println(authentication.getName());
//        HttpSession session=httpServletRequest.getSession(false);
//        LoggedUser loggedUser=(LoggedUser)session.getAttribute("name");
//        List<String> users=loggedUser.getActiveUsersStore().getUsers();
////        users.remove(users.indexOf(loggedUser.getUsername()));
//        if(session!=null)
//        {
//            users.remove(users.indexOf(loggedUser.getUsername()));
//            session.removeAttribute("user");
//        }
    }
}
