package com.siwz.hotelapp.service;

import com.siwz.hotelapp.model.entity.Reservation;
import com.siwz.hotelapp.model.entity.Role;
import com.siwz.hotelapp.model.repository.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ReservationService {

    private ReservationRepo reservationRepo;

    @Autowired
    public ReservationService(ReservationRepo reservationRepo) {
        this.reservationRepo = reservationRepo;
    }

    public void addReservation(int idUser, int idRoom, String dataFrom, String dateTo) {
        this.reservationRepo.addReservation(idUser, idRoom, dataFrom, dateTo);
    }
    public List<Reservation> findAll(){
        return reservationRepo.findAll();
    }
    public void delete(Integer integer){
        this.reservationRepo.deleteUserByUserId(integer);
    }

    public List<Reservation> findAllByUserId(int userId){
        return reservationRepo.getAllReservationsByUserId(userId);
    }

}
