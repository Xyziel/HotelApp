package com.siwz.hotelapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HotelApplication {
    //TODO controller to return pages instead of switch route in react?
    public static void main(String[] args) {
        SpringApplication.run(HotelApplication.class, args);
    }
}
