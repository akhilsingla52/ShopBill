package com.shop.bill.admin.bo;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Code {
	private String codeKey;
	private String parentCodeKey;
	private String codeType;
	private String messageEn;
	private String messageHi;
	private List<Code> codes;
}
