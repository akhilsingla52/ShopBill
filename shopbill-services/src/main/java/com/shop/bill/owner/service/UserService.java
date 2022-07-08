package com.shop.bill.owner.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.shop.bill.entity.Users;

public interface UserService {

	Page<Users> getUserPage(String search, String userType, Pageable pageable);

	List<Users> getUserList(String search, String userType);

	Users getUser(Long userId);

	Users saveOrUpdateUser(Users user);

	void deleteUser(Long userId);

}
