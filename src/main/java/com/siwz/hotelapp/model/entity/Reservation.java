package com.siwz.hotelapp.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "reservation")
public class Reservation {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "reservation_id")
    private int ReservationId;

    @NotNull
    @Column(name = "id_user")
    private int idUser;

    @NotNull
    @Column(name = "id_room")
    private int idRoom;

    @NotNull
    @Column(name = "from")
    private Date from;

    @NotNull
    @Column(name = "to")
    private Date to;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "id_user", referencedColumnName = "user_id")
    private User user;

    @ManyToOne(targetEntity = Room.class)
    @JoinColumn(name = "id_room", referencedColumnName = "room_id")
    private Room room;

    public int getReservationId() {
        return ReservationId;
    }

    public void setReservationId(int reservationId) {
        ReservationId = reservationId;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public int getIdRoom() {
        return idRoom;
    }

    public void setIdRoom(int idRoom) {
        this.idRoom = idRoom;
    }

    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }
}
