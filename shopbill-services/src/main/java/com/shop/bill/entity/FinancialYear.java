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
public class FinancialYear extends CommonEntity {
    private String financialyear;
}
