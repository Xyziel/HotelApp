package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.model.repository.RoomRepo;
import com.siwz.hotelapp.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoomController {

    private RoomService roomService;
    private RoomRepo roomRepo;

    @Autowired
    public RoomController(RoomRepo roomRepo) {
        this.roomRepo = roomRepo;
    }

    @PostMapping("/reservation/check")
    public ResponseEntity<List<Room>> findFreeRooms() {
        return ResponseEntity.ok(roomRepo.findFreeRooms());
    }
}
