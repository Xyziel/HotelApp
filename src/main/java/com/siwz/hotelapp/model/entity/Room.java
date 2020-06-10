package com.siwz.hotelapp.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "room_id")
    private int roomId;

    @NotNull
    @Column(name = "number")
    private int number;

    @Column(name = "floor")
    private int floor;

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

    @ManyToOne(targetEntity = Standard.class)
    @JoinColumn(name = "id_standard", referencedColumnName = "standard_id")
    private Standard standard;

    @OneToMany(mappedBy = "room", targetEntity = Reservation.class)
    private List<Reservation> reservations;

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

    public BedsCount getBedsCount() {
        return bedsCount;
    }

    public void setBedsCount(BedsCount bedsCount) {
        this.bedsCount = bedsCount;
    }

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public Standard getStandard() {
        return standard;
    }

    public void setStandard(Standard standard) {
        this.standard = standard;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

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
