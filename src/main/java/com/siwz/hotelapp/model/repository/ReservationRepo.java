package com.siwz.hotelapp.model.repository;

import com.siwz.hotelapp.model.entity.Reservation;
import com.siwz.hotelapp.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    //add query
    @Query(value = "select * from reservations", nativeQuery = true)
    void addReservation(int idUser, int idRoom, String dateFrom, String dateTo);
    List<Reservation> findAll();
    @Transactional
    @Modifying
    @Query(value="delete from reservations where reservations.reservation_id=:reservationId",nativeQuery=true)
    public void deleteUserByUserId(@Param("reservationId") int id);
}
