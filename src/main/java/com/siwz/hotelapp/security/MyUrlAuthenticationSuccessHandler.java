package com.siwz.hotelapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Component
public class MyUrlAuthenticationSuccessHandler implements AuthenticationSuccessHandler
{
    @Autowired
    private ActiveUsersStore activeUsersStore;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException
    {
        HttpSession session = httpServletRequest.getSession(false);
        if(session != null)
        {
            LoggedUser loggedUser =new LoggedUser(authentication.getName(),activeUsersStore);
            session.setAttribute("user",loggedUser);
        }
//        System.out.println(authentication.getName());
//        session.setAttribute("user",);
    }
}
