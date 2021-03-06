package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role,Integer>
{
    Role findById(int id);
    Optional<Role> findByName(String name);
    List<Role> findAll();

}
