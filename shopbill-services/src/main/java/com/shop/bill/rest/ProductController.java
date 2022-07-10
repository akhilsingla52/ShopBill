package com.shop.bill.rest;

import static com.shop.bill.util.Constants.PRODUCT_URI;

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

import com.shop.bill.entity.Product;
import com.shop.bill.service.ProductService;

@RestController
@RequestMapping(PRODUCT_URI)
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/page")
	public ResponseEntity<?> getProductPage(@RequestParam(required=false) String search, 
											@PageableDefault(page = 0, size = 10) Pageable pageable) {
		return ResponseEntity.ok(productService.getProductPage(search, pageable));
	}
	
	@GetMapping("/list")
	public ResponseEntity<?> getProductList(@RequestParam(required=false) String search) {
		return ResponseEntity.ok(productService.getProductList(search));
	}
	
	@GetMapping("/{productId}")
	public ResponseEntity<?> getProduct(@PathVariable Long productId) {
		return ResponseEntity.ok(productService.getProduct(productId));
	}
	
	@PostMapping
	public ResponseEntity<?> saveOrUpdateProduct(@RequestBody Product product) {
		return ResponseEntity.ok(productService.saveOrUpdateProduct(product));
	}
	
	@DeleteMapping("/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {
		productService.deleteProduct(productId);
		return ResponseEntity.ok().build();
	}
	
	
}
