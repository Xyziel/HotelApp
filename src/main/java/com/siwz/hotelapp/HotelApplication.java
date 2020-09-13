package com.siwz.hotelapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HotelApplication {
    //TODO controller to return pages instead of switch route in react?
    //TODO basically i guess i have to control cookies with sessioid in react
    //and send them with axios, also i think i need session management if required
    //withc combination of creating session in url authentication success handler but not sure 
    public static void main(String[] args) {
        SpringApplication.run(HotelApplication.class, args);
    }
}
