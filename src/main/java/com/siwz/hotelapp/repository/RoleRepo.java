package com.siwz.hotelapp.repository;

import com.siwz.hotelapp.entity.Role;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo
{
    Role findById(int id);
    Role findByName(String name);

}
