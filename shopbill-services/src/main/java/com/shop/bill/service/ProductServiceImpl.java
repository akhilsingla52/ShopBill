package com.shop.bill.service;

import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shop.bill.entity.Product;
import com.shop.bill.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository; 

	public Page<Product> getProductPage(String search, Pageable pageable) {
		if(StringUtils.isBlank(search)) {
			return productRepository.findAll(pageable);
		} else {
			search = StringUtils.isNotBlank(search) ? ("%"+search+"%") : null;
			return productRepository.getProductPage(search, pageable);
		}
	}
	
	public List<Product> getProductList(String search) {
		search = StringUtils.isNotBlank(search) ? ("%"+search+"%") : null;
		return productRepository.getProductList(search);
	}
	
	public Product getProduct(Long productId) {
		Optional<Product> product = productRepository.findById(productId);
		return product.isPresent() ? product.get() : null;
	}

	public Product saveOrUpdateProduct(Product product) {
		return productRepository.save(product);
	}

	public void deleteProduct(Long productId) {
		productRepository.deleteById(productId);
	}

}
