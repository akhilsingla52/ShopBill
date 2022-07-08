package com.shop.bill.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/**
*
* @author Akhil Singla
*/
@Getter
@Setter
@Entity
public class CommonCode {
	@Id
	private String codeKey;
	private String parentCodeKey;
	private String codeType;
	private String messageEn;
	private String messageHi;
	private Character delYn = 'N';
}
