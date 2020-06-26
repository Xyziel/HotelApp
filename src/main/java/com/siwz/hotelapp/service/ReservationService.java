package com.siwz.hotelapp.service;

import com.siwz.hotelapp.model.repository.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
}
