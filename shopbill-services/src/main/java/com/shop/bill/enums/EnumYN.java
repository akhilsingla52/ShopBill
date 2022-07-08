package com.shop.bill.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum EnumYN {
	Y('Y'), N('N');
	
	Character value;
}
