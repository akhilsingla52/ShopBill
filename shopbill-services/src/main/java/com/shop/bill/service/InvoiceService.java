package com.shop.bill.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.shop.bill.entity.Invoice;

public interface InvoiceService {

	Page<Invoice> getInvoicePage(String search, String invoiceType, Pageable pageable);

	Invoice getInvoice(Long invoiceId);

	Invoice saveOrUpdateInvoice(Invoice invoice);

	void deleteInvoice(Long invoiceId);

}
