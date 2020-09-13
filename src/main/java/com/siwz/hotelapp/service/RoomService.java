package com.siwz.hotelapp.service;

import com.siwz.hotelapp.model.entity.Room;
import com.siwz.hotelapp.model.repository.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private RoomRepo roomRepo;

    @Autowired
    RoomService(RoomRepo roomRepo) {
        this.roomRepo = roomRepo;
    }

    public List<Room> findFreeRooms(String dateFrom, String dateTo) {
        return roomRepo.findFreeRooms(dateFrom, dateTo);
    }
}
