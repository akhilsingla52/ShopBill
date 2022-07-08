package com.shop.bill.admin.service;

import java.util.List;

import com.shop.bill.admin.bo.Code;
import com.shop.bill.entity.CommonCode;

public interface CommonCodeService {

	List<Code> getCodeList();

	CommonCode getCode(String codeKey);
	
	List<CommonCode> getCodeList(String parentCodeKey);

	CommonCode saveOrUpdateCode(CommonCode commonCode);

	void deleteCode(String codeKey);

}
