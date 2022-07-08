package com.shop.bill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shop.bill.entity.CommonCode;

@Repository
public interface CommonCodeRepository extends JpaRepository<CommonCode, String> {
	
	public List<CommonCode> findByParentCodeKey(String parentCodeKey);
	
	@Modifying
	@Query("UPDATE CommonCode SET delYn='Y' WHERE codeKey=:codeKey")
	void deleteById(@Param("codeKey") String codeKey);

}
