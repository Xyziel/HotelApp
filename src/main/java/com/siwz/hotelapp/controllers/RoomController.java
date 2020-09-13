package com.siwz.hotelapp.controllers;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.service.RoomService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoomController {

    private RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/reservation/check")
    public ResponseEntity<List<Room>> findFreeRooms(@RequestBody JSONObject data) {
        return ResponseEntity.ok(roomService.findFreeRooms(data.get("dateFrom").toString(), data.get("dateTo").toString()));
    }
}
