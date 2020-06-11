package com.siwz.hotelapp.security;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


//@Component
//@WebFilter
public class MyWebFilter implements Filter
{

    @Override
    public void init(FilterConfig filterConfig) throws ServletException
    {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
    {
        //Tu powinienem zmienic nazewnictwo jesli sie to powiedzie
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        request.getContentType();
        HttpServletResponse httpServletResponse=(HttpServletResponse)response;
//        httpServletResponse.addHeader("Access-Control-Allow-Origin","*");

        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*");
//        httpServletResponse.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
//        httpServletResponse.setHeader("Access-Control-Max-Age", "3600");
//        httpServletResponse.setHeader("Access-Control-Allow-Headers", "x-requested-with");
        chain.doFilter(httpServletRequest,httpServletResponse);
    }

    @Override
    public void destroy()
    {

    }
}
