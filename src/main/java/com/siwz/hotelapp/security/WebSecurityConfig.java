package com.siwz.hotelapp.security;

import com.siwz.hotelapp.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.csrf.CsrfFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{

    @Autowired
    private MyUrlAuthenticationSuccessHandler myUrlAuthenticationSuccessHandler;

    @Autowired
    private MyUrlFailureLoginHandler myUrlFailureLoginHandler;

    @Autowired
    private MyUrlLogoutHandler myUrlLogoutHandler;

    @Autowired
    private MyCustomAuthenticationEntryPoint myCustomAuthenticationEntryPoint;

    @Bean
    public UserDetailsService userDetailsService()
    {
        return new MyUserDetailsService();
    }

    @Bean
    MyWebFilter myWebFilter()
    {
        MyWebFilter myWebFilter = new MyWebFilter();
        return myWebFilter;
    }


    @Bean
    public DaoAuthenticationProvider authenticationProvider()
    {
        DaoAuthenticationProvider authenticationProvider= new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }



    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.authenticationProvider(authenticationProvider());
//        auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {


//        http.cors().and().csrf().disable().authorizeRequests().antMatchers("/**").permitAll();
        //TODO do formularza moge dodac token crsf jak bedzie czas


        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS).
                and().csrf().disable().
        addFilterBefore(myWebFilter(), CsrfFilter.class).
                authorizeRequests().
                antMatchers("/*").permitAll().
                antMatchers("/api/users/*").permitAll().
                antMatchers("/reservation/check").permitAll().
                antMatchers("/reservation/user/**").hasAnyAuthority("admin","cook","receptionist","client").
                antMatchers("/reservation/admin/**").hasAuthority("admin").
                antMatchers("/api/roles/**").hasAuthority("admin").
                antMatchers("/dao/**").hasAuthority("admin").
                antMatchers("/api/users/admin/**").hasAuthority("admin").anyRequest().authenticated().
//                antMatchers("/**").permitAll().
                and().
                formLogin().
                usernameParameter("username").
                passwordParameter("password").
                loginProcessingUrl("/perform_login").
                successHandler(myUrlAuthenticationSuccessHandler).
                failureHandler(myUrlFailureLoginHandler).
                permitAll().
                and().
                logout().
                logoutSuccessHandler(myUrlLogoutHandler).
                permitAll().
                and().httpBasic().authenticationEntryPoint(myCustomAuthenticationEntryPoint);
//                and().exceptionHandling().authenticationEntryPoint(myCustomAuthenticationEntryPoint);
    }
}
