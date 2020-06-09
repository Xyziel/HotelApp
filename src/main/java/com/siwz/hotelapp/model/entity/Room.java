package com.siwz.hotelapp.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "rooms")
public class Room {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "room_id")
    private int roomId;

    @NotNull
    @Column(name = "number")
    private int number;

    @Column(name = "floor")
    private int floor;

    @NotNull
    @Column(name = "id_beds_count")
    private int idBedsCount;

    @NotNull
    @Column(name = "id_building")
    private int idBuilding;

    // is it necessary?
//    @Column(name = "id_standard")
//    private int idStandard;

    @NotNull
    @Column(name = "price")
    private double price;

    @Column(name = "description")
    private String description;

    @ManyToOne(targetEntity = BedsCount.class)
    @JoinColumn(name = "id_beds_count", referencedColumnName = "beds_count_id")
    private BedsCount bedsCount;

    @ManyToOne(targetEntity = Building.class)
    @JoinColumn(name = "id_building", referencedColumnName = "building_id")
    private Building building;

    public Room() {
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public int getIdBedsCount() {
        return idBedsCount;
    }

    public void setIdBedsCount(int idBedsCount) {
        this.idBedsCount = idBedsCount;
    }

    public int getIdBuilding() {
        return idBuilding;
    }

    public void setIdBuilding(int idBuilding) {
        this.idBuilding = idBuilding;
    }

//    public int getIdStandard() {
//        return idStandard;
//    }
//
//    public void setIdStandard(int idStandard) {
//        this.idStandard = idStandard;
//    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
