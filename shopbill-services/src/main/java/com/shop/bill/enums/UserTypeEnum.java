package com.shop.bill.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UserTypeEnum {
	ADMIN(1, "Admin"), OWNER(2, "Owner"), STAFF(3, "Staff");
	
	private int code;
	private String name;
}
