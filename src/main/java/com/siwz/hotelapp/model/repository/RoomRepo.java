package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.model.entity.Standard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface RoomRepo extends JpaRepository<Room, Integer> {

    @Query(value = "SELECT r.* FROM rooms r INNER JOIN reservations r2 on r.room_id = r2.id_room WHERE NOT ((:dateFrom >= date_from AND :dateFrom < date_to) OR (:dateTo > date_from and :dateTo <= date_to));", nativeQuery = true)
    List<Room> findFreeRooms(String dateFrom,String dateTo);

    List<Room> findByNumber(int number);

    List<Room> findByFloor(int number);

    List<Room> findByPriceBetween(double lowerPrice, double higherPrice);

    List<Room> findByStandard(Standard standard);

  //  List<Room> findByBedsCount(BedsCount bedsCount);


}
