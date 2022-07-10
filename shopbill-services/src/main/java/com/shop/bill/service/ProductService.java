package com.shop.bill.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.shop.bill.entity.Product;

public interface ProductService {

	Page<Product> getProductPage(String search, Pageable pageable);
	
	List<Product> getProductList(String search);

	Product getProduct(Long productId);

	Product saveOrUpdateProduct(Product product);

	void deleteProduct(Long productId);

}
