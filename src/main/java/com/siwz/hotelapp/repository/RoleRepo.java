package com.siwz.hotelapp.repository;

import com.siwz.hotelapp.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role,Integer>
{
//    Role findById(int id);
//    Optional<Role> findByName(String name);
}
