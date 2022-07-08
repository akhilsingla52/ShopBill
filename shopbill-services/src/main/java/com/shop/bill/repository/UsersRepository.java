package com.shop.bill.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shop.bill.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
	
	public static final String FIND_USERS_PAGE = 
			  "FROM Users u "
			+ "WHERE (:search IS NULL OR code LIKE :search "
			+ "OR u.name LIKE :search "
			+ "OR u.mobile LIKE :search "
			+ "OR u.phone LIKE :search "
			+ "OR u.gstin LIKE :search) "
			+ "AND (:userType IS NULL OR u.type.codeKey=:userType)";
	
	public static final String FIND_USERS_LIST = FIND_USERS_PAGE 
			+ " AND u.delYn='N'";
	
	@Query(FIND_USERS_PAGE)
	Page<Users> getUsersPage(@Param("search") String search, 
							 @Param("userType") String userType, 
							 Pageable pageable);
	
	@Query(FIND_USERS_LIST)
	List<Users> getUsersList(@Param("search") String search, 
							  @Param("userType") String userType);
	
	List<Users> findByDelYn(Character delYn);
	
	@Modifying
	@Query("UPDATE Users SET delYn='Y' WHERE id=:id")
	void deleteById(@Param("id") Long id);

}
