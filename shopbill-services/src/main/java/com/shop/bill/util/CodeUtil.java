package com.shop.bill.util;

import com.shop.bill.admin.bo.Code;
import com.shop.bill.entity.CommonCode;

public class CodeUtil {

	private CodeUtil() {}

	public static Code createCode(CommonCode commonCode) {
		return new Code(
				commonCode.getCodeKey(), 
				commonCode.getParentCodeKey(), 
				commonCode.getCodeType(), 
				commonCode.getMessageEn(), 
				commonCode.getMessageHi(), 
				null);
	}
	
}
