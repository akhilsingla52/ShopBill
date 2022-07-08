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
public class Item extends CommonEntity {
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
	private Invoice invoice;
	
	private String code;
	
    private String name;
    
    private String hsnCode;
    
    private Double unit;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "unit_type")
	private CommonCode unitType;
    
    private Double price;
    
    private Double total;
    
}
