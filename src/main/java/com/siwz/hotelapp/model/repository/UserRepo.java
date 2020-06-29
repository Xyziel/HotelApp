package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;


//TODO endpoint dla repo
@Repository
public interface UserRepo extends JpaRepository<User,Integer>
{
    @Query(value="select * from users where users.user_name=:name",nativeQuery=true)
    public User findUserByUserName(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value="delete from users where users.user_id=:userId",nativeQuery=true)
    public void deleteUserByUserId(@Param("userId") int userId);


    @Override
    void deleteById(Integer integer);



    //query do findowania po emailu

}
