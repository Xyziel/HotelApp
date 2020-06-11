package com.siwz.hotelapp.security;

import com.siwz.hotelapp.service.MyUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CsrfFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{

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
        //TODO co z Corsem, i jesli odpale front i back to ta configuracja nie
        //obsluzy mi end pointow z fronta

//        http.cors().and().csrf().disable().authorizeRequests().antMatchers("/**").permitAll();
//        http.authorizeRequests().antMatchers("/**").permitAll();

//        http.cors().and().csrf().and().addFilterBefore(myWebFilter(), SessionManagementFilter.class).authorizeRequests()

//        http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and().
        //TODO there was simply crsf problem, i need to add it in header in react to make it work

        http.csrf().disable().
        addFilterBefore(myWebFilter(), CsrfFilter.class).authorizeRequests()
                .antMatchers("/**").permitAll().
//                .antMatchers("/dao/**").hasAuthority("admin").anyRequest().authenticated().
                and().
                formLogin().
                usernameParameter("username").
                passwordParameter("password").
                loginProcessingUrl("/perform_login").
                defaultSuccessUrl("/",true).
                permitAll().
                and().
                logout().permitAll();
    }
}
