package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO reservations (id_user, id_room, date_from, date_to) VALUES (:idUser, :idRoom, :dateFrom, :dateTo)", nativeQuery = true)
    void addReservation(int idUser, int idRoom, String dateFrom, String dateTo);
}
