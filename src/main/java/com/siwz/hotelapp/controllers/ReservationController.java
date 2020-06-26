package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.service.ReservationService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReservationController {

    private ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PutMapping("reservation/add")
    public void addReservation(@RequestBody JSONObject data) {
        this.reservationService.addReservation(Integer.parseInt(data.get("idUser").toString()), Integer.parseInt(data.get("idRoom").toString()), data.get("dateFrom").toString(), data.get("dateTo").toString());
    }
}
