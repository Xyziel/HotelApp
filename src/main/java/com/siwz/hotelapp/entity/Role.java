package com.siwz.hotelapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role
{
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    int role_id;

    String name;

}
