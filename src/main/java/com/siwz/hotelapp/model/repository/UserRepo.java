package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Role;
import com.siwz.hotelapp.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<User,Integer> {

    List<User> findByUserName(String userName);

    List<User> findByFirstName(String firstName);

    List<User> findByLastName(String lastName);

    List<User> findByEmail(String email);

    List<User> findByPhoneNumber(String phoneNumber);

    List<User> findByRole(Role role);

}
