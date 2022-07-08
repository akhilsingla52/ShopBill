package com.shop.bill.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shop.bill.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	public static final String FIND_PRODUCT_PAGE = 
			  "FROM Product p "
			+ "WHERE (:search IS NULL "
			+ "OR p.code LIKE :search "
			+ "OR p.name LIKE :search "
			+ "OR p.hsnCode LIKE :search)";
	
	public static final String FIND_PRODUCT_LIST = FIND_PRODUCT_PAGE 
			+ " AND p.delYn='N'";
	
	@Query(FIND_PRODUCT_PAGE)
	Page<Product> getProductPage(@Param("search") String search, Pageable pageable);
	
	@Query(FIND_PRODUCT_LIST)
	List<Product> getProductList(@Param("search") String search);
	
	List<Product> findByDelYn(Character delYn);
	
	@Modifying
	@Query("UPDATE Product SET delYn='Y' WHERE id=:id")
	void deleteById(@Param("id") Long id);

}
