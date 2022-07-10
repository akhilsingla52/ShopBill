package com.shop.bill.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_type")
	private CommonCode type;
    private String code;
    private String name;
    private String email;
    @Column(columnDefinition = "text")
    private String address;
    @Column(length = 11, unique = true)
    private Long mobile;
    @Column(length = 11)
    private Long phone;
    private String gstin;
    private String pan;
    private String state;
    private String stateCode;
    @Column(length = 6)
    private Long pinCode;
    private Double balance;
    private String remark;
}
