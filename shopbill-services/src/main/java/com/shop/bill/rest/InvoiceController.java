package com.shop.bill.rest;

import static com.shop.bill.util.Constants.INVOICE_URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shop.bill.entity.Invoice;
import com.shop.bill.service.InvoiceService;

@RestController
@RequestMapping(INVOICE_URI)
public class InvoiceController {
	
	@Autowired
	private InvoiceService invoiceService;
	
	@GetMapping("/page")
	public ResponseEntity<?> getInvoicePage(@RequestParam String search, 
											@RequestParam String invoiceType, 
											@PageableDefault(page = 0, size = 10) Pageable pageable) {
		return ResponseEntity.ok(invoiceService.getInvoicePage(search, invoiceType, pageable));
	}
	
	@GetMapping("/{invoiceId}")
	public ResponseEntity<?> getInvoice(@PathVariable Long invoiceId) {
		return ResponseEntity.ok(invoiceService.getInvoice(invoiceId));
	}
	
	@PostMapping
	public ResponseEntity<?> saveOrUpdateInvoice(@RequestBody Invoice invoice) {
		invoiceService.saveOrUpdateInvoice(invoice);
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/{invoiceId}")
	public ResponseEntity<?> deleteInvoice(@PathVariable Long invoiceId) {
		invoiceService.deleteInvoice(invoiceId);
		return ResponseEntity.ok().build();
	}

}
