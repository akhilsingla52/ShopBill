package com.shop.bill.service;

import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shop.bill.entity.Invoice;
import com.shop.bill.repository.InvoiceRepository;

@Service
@Transactional
public class InvoiceServiceImpl implements InvoiceService {
	
	@Autowired
	private InvoiceRepository invoiceRepository;

	public Page<Invoice> getInvoicePage(String search, String invoiceType, Pageable pageable) {
		if(StringUtils.isNotBlank(search)
				&& StringUtils.isNotBlank(invoiceType)) {
			return invoiceRepository.findAll(pageable);
		} else {
			search = StringUtils.isNotBlank(search) ? ("%"+search+"%") : null;
			invoiceType = StringUtils.isNotBlank(invoiceType) ? invoiceType : null;
			return invoiceRepository.getInvoicePage(search, invoiceType, pageable);
		}
	}

	public Invoice getInvoice(Long invoiceId) {
		Optional<Invoice> invoice = invoiceRepository.findById(invoiceId);
		return invoice.isPresent() ? invoice.get() : null;
	}

	public Invoice saveOrUpdateInvoice(Invoice invoice) {
		return invoiceRepository.save(invoice);
	}

	public void deleteInvoice(Long invoiceId) {
		invoiceRepository.deleteById(invoiceId);
	}

}
