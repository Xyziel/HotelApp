package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.model.entity.Standard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface RoomRepo extends JpaRepository<Room, Integer> {

    @Query(value = "select * from rooms " +
            "where room_id not in (select id_room from reservations " +
            "where (:dateFrom >= date_from and :dateFrom < date_to) or (:dateTo > date_from and :dateTo <= date_to))", nativeQuery = true)
    List<Room> findFreeRooms(String dateFrom,String dateTo);
}
