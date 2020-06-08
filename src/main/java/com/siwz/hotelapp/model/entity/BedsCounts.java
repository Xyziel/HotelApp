package com.siwz.hotelapp.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "beds_counts")
public class BedsCounts {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "beds_counts_id")
    private int bedsCountsId;

    @NotNull
    @Column(name = "single")
    private int single;

    @NotNull
    @Column(name = "doublee")
    private int doublee;

    @NotNull
    @Column(name = "additional_single")
    private int additionalSingle;

    @NotNull
    @Column(name = "additional_double")
    private int additionaDouble;

    public int getBedsCountsId() {
        return bedsCountsId;
    }

    public void setBedsCountsId(int bedsCountsId) {
        this.bedsCountsId = bedsCountsId;
    }

    public int getSingle() {
        return single;
    }

    public void setSingle(int single) {
        this.single = single;
    }

    public int getDoublee() {
        return doublee;
    }

    public void setDoublee(int doublee) {
        this.doublee = doublee;
    }

    public int getAdditionalSingle() {
        return additionalSingle;
    }

    public void setAdditionalSingle(int additionalSingle) {
        this.additionalSingle = additionalSingle;
    }

    public int getAdditionaDouble() {
        return additionaDouble;
    }

    public void setAdditionaDouble(int additionaDouble) {
        this.additionaDouble = additionaDouble;
    }
}
