package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role,Integer>
{
//    Role findById(int id);
//    Optional<Role> findByName(String name);
}
