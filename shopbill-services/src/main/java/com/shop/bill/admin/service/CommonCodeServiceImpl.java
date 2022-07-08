package com.shop.bill.admin.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shop.bill.admin.bo.Code;
import com.shop.bill.entity.CommonCode;
import com.shop.bill.repository.CommonCodeRepository;
import com.shop.bill.util.CodeUtil;

@Service
@Transactional
public class CommonCodeServiceImpl implements CommonCodeService {
	
	@Autowired
	private CommonCodeRepository commonCodeRepository;

	public List<Code> getCodeList() {
		List<CommonCode> commonCodes = commonCodeRepository.findByParentCodeKey(null);
		
		List<Code> codes = new ArrayList<>();
		commonCodes.forEach(cc -> {
			Code code = CodeUtil.createCode(cc);
			List<CommonCode> commonCodes2 = 
					commonCodeRepository.findByParentCodeKey(cc.getCodeKey());
			if( CollectionUtils.isNotEmpty(commonCodes2) ) {
				List<Code> codes2 = new ArrayList<>();
				commonCodes2.forEach(cc2 -> {
					Code code2 = CodeUtil.createCode(cc2);
					codes2.add(code2);
				});
				code.setCodes(codes2);
			}
			codes.add(code);
		});
		
		return codes;
	}
	
	public CommonCode getCode(String codeKey) {
		Optional<CommonCode> commonCode = commonCodeRepository.findById(codeKey);
		return commonCode.isPresent() ? commonCode.get() : null;
	}
	
	public List<CommonCode> getCodeList(String parentCodeKey) {
		return commonCodeRepository.findByParentCodeKey(parentCodeKey);
	}

	public CommonCode saveOrUpdateCode(CommonCode commonCode) {
		return commonCodeRepository.save(commonCode);
	}

	public void deleteCode(String codeKey) {
		commonCodeRepository.deleteById(codeKey);
	}

}
