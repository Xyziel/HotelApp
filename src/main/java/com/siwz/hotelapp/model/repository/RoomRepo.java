package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepo extends JpaRepository<Room, Integer> {

//    @Query(value = "select * from rooms\n" +
//            "    where room_id not in (select id_room from reservations\n" +
//            "            where ('2020-05-30' >= date_from and '2020-05-30' < date_to) or ('2020-06-01' > date_from and '2020-06-01' <= date_to))", nativeQuery = true)
//    List<Room> findFreeRooms();

    @Query(value = "select * from rooms where rooms.room_id = 1", nativeQuery = true)
    List<Room> findFreeRooms();
}
