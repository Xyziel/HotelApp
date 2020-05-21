package com.siwz.hotelapp.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User
{
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    int user_id;



}
