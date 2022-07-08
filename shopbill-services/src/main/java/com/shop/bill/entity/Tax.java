package com.shop.bill.entity;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

/**
*
* @author Akhil Singla
*/
@Getter
@Setter
@Entity
public class Tax extends CommonEntity {
    private String taxname;
    private String taxvalue;
}
