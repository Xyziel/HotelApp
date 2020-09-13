package com.siwz.hotelapp.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "reservations")
public class Reservation {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "reservation_id")
    private int ReservationId;

    @NotNull
    @Column(name = "date_from")
    private Date dateFrom;

    @NotNull
    @Column(name = "date_to")
    private Date dateTo;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "id_user", referencedColumnName = "user_id")
    @JsonIgnoreProperties("reservations")
    private User user;

    @ManyToOne(targetEntity = Room.class)
    @JoinColumn(name = "id_room", referencedColumnName = "room_id")
    @JsonIgnoreProperties("reservations")
    private Room room;

    public int getReservationId() {
        return ReservationId;
    }

    public void setReservationId(int reservationId) {
        ReservationId = reservationId;
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
