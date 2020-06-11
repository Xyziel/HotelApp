package com.siwz.hotelapp.security;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


//@Component
@WebFilter
public class MyWebFilter implements Filter
{

    @Override
    public void init(FilterConfig filterConfig) throws ServletException
    {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
    {
        //TODO Tu powinienem zmienic nazewnictwo jesli sie to powiedzie
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse=(HttpServletResponse)response;

        //TODO dlaczego getReader niszczy te funkcje ?

        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*");
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        httpServletResponse.setHeader("Access-Control-Allow-Headers", "Content-Type");
        chain.doFilter(httpServletRequest,httpServletResponse);

    }

    @Override
    public void destroy()
    {

    }
}
