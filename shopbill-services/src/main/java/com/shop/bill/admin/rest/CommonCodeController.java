package com.shop.bill.admin.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.bill.admin.service.CommonCodeService;
import com.shop.bill.entity.CommonCode;

import static com.shop.bill.util.Constants.COMMON_CODE_URI;

@RestController
@RequestMapping(COMMON_CODE_URI)
public class CommonCodeController {
	
	@Autowired
	private CommonCodeService commonCodeService;
	
	@GetMapping("/list")
	public ResponseEntity<?> getCodeList() {
		return ResponseEntity.ok(commonCodeService.getCodeList());
	}
	
	@GetMapping("/{codeKey}")
	public ResponseEntity<?> getCode(@PathVariable String codeKey) {
		return ResponseEntity.ok(commonCodeService.getCode(codeKey));
	}
	
	@GetMapping("/list/{parentCodeKey}")
	public ResponseEntity<?> getCodeList(@PathVariable String parentCodeKey) {
		return ResponseEntity.ok(commonCodeService.getCodeList(parentCodeKey));
	}
	
	@PostMapping
	public ResponseEntity<?> saveOrUpdateCode(@RequestBody CommonCode commonCode) {
		commonCode = commonCodeService.saveOrUpdateCode(commonCode);
		return ResponseEntity.ok(commonCode);
	}
	
	@DeleteMapping("/{codeKey}")
	public ResponseEntity<?> deleteCode(@PathVariable String codeKey) {
		commonCodeService.deleteCode(codeKey);
		return ResponseEntity.ok().build();
	}

}
