package com.shop.bill.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum LoginRoleEnum {
	CLIENT(1, "Client"), CUSTOMER(2, "Customer");
	
	private int code;
	private String name;
}
