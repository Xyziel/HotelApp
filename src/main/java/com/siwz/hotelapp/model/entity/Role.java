package com.siwz.hotelapp.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name="roles")
public class Role
{
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name="role_id")
    private int roleId;

    @NotNull
    private String name;

    @OneToMany(mappedBy = "role",targetEntity = User.class)
    List<User> users;




    public int getRoleId()
    {
        return roleId;
    }

    public void setRoleId(int roleId)
    {
        this.roleId = roleId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}
