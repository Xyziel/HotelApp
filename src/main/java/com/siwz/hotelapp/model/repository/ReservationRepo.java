package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    //add query
    @Query
    void addReservation(int idUser, int idRoom, String dateFrom, String dateTo);
}
