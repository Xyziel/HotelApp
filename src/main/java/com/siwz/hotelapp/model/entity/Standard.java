package com.siwz.hotelapp.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "standards")
public class Standard {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "standard_id")
    private int standardId;

    @NotNull
    @Column(name = "name")
    private String name;

//    @OneToMany(mappedBy = "standard", targetEntity = Room.class)
//    private List<Room> rooms;

    public int getStandardId() {
        return standardId;
    }

    public void setStandardId(int standardId) {
        this.standardId = standardId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
//
//    public List<Room> getRooms() {
//        return rooms;
//    }
//
//    public void setRooms(List<Room> rooms) {
//        this.rooms = rooms;
//    }
}
