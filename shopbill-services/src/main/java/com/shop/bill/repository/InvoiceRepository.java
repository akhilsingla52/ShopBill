package com.shop.bill.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shop.bill.entity.Invoice;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
	
	public static final String FIND_INVOICE_PAGE = 
			  "FROM Invoice i "
			+ "WHERE (:search IS NULL "
			+ "OR i.user.code LIKE :search "
			+ "OR i.user.name LIKE :search "
			+ "OR i.user.mobile LIKE :search "
			+ "OR i.user.phone LIKE :search "
			+ "OR i.user.gstin LIKE :search) "
			+ "AND (:invoiceType IS NULL OR i.type.codeKey=:invoiceType)";
	
	@Query(FIND_INVOICE_PAGE)
	Page<Invoice> getInvoicePage(@Param("search") String search, 
							 @Param("invoiceType") String invoiceType, 
							 Pageable pageable);
	
	@Modifying
	@Query("UPDATE Invoice SET delYn='Y' WHERE id=:id")
	void deleteById(@Param("id") Long id);

}
