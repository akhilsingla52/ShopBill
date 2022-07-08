package com.shop.bill.entity;

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
public class Login extends CommonEntity {
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_key")
	private CommonCode commonCode;
	private String username;
	private String email;
	private String password;
	private String token;
}
