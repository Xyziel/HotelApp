package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.service.ReservationService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservationController {

    private ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("reservation/add")
    public void addReservation(@RequestBody JSONObject data) {
        this.reservationService.addReservation(Integer.parseInt(data.get("idUser").toString()), Integer.parseInt(data.get("idRoom").toString()), data.get("dateFrom").toString(), data.get("dateTo").toString());
    }
}
