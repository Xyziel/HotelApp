package com.siwz.hotelapp.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="Roles")
public class Role
{
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name="role_id")
    private int roleId;

    @NotNull
    private String name;

    public Role()
    {

    }


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
