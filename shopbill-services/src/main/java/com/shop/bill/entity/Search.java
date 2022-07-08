package com.shop.bill.entity;

import lombok.Getter;
import lombok.Setter;

/**
*
* @author Akhil Singla
*/
@Getter
@Setter
public class Search {
	private long billno;
    private String billto;
    private String billdate;
    private String taxpayable;
    private String custcode;
    private String custname;
    private String billaddress;
    private String shipaddress;
    private String shipcustname;
    private String scode;
    private String state;
    private String gstinnumber;
    private double totalcgst;
    private double totalsgst;
    private double totaltax;
    private String subtotal;
    private String vehicleno;
    private String tmode;
    private String psupply;
    private String datetime;
    private String fcharge;
    private String loading;
    private String insurance;
    private String other;
    private String note;
    private double grandtotal;
    private String stime;
    private String searchtime;
}
