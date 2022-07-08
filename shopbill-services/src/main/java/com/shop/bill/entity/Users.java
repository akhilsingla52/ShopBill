package com.shop.bill.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

/**
*
* @author Akhil Singla
*/
@Getter
@Setter
@Entity
public class Users extends CommonEntity {
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_type")
	private CommonCode type;
    private String code;
    private String name;
    private String email;
    @Column(columnDefinition = "text")
    private String address;
    @Column(length = 11, unique = true)
    private Integer mobile;
    @Column(length = 11)
    private Integer phone;
    private String gstin;
    private String pan;
    private String state;
    private String stateCode;
    private String pinCode;
    private Double balance;
    private String remark;
}
