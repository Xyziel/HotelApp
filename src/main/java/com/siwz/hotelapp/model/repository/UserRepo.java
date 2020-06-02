package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer>
{
    User findUserByFirstName(String name);
}
