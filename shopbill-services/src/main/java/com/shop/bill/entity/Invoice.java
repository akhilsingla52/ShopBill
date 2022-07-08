package com.shop.bill.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

/**
*
* @author Akhil Singla
*/
@Getter
@Setter
@Entity
public class Invoice extends CommonEntity {
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
	private Users user;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_type_key")
	private CommonCode type;
    
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_status_key")
	private CommonCode status;
	
	private Double total;
	
	private Double discount;
	
	private Integer sgst;
	
	private Integer cgst;
	
	private Double totalAmt;
	
	private Double pendingAmt;
	
	private long invoiceDate;
	
	@OneToMany(mappedBy = "invoice",
			fetch = FetchType.LAZY, 
			cascade={CascadeType.ALL})
	private List<Item> items;
}
