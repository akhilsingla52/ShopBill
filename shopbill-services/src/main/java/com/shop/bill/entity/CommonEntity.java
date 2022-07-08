package com.shop.bill.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PostPersist;
import javax.persistence.PrePersist;

import com.shop.bill.util.DateUtil;

import lombok.Getter;
import lombok.Setter;

/**
*
* @author Akhil Singla
*/
@Getter
@Setter
@MappedSuperclass
public abstract class CommonEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private Character delYn;
	private String crtId;
	private String uptId;
	private long crtDtm;
	private long uptDtm;
	
	@PrePersist
	public void prePersist() {
		this.delYn = 'N';
		this.crtDtm = DateUtil.currentTimeMillis();
		this.uptDtm = DateUtil.currentTimeMillis();
	}
	
	@PostPersist
	public void postPersist() {
		this.uptDtm = DateUtil.currentTimeMillis();
	}
}
