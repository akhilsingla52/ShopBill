package com.shop.bill.service;

import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shop.bill.entity.Users;
import com.shop.bill.repository.UsersRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UsersRepository usersRepository;

	public Page<Users> getUserPage(String search, String userType, Pageable pageable) {
		if(StringUtils.isBlank(search)
				&& StringUtils.isBlank(userType)) {
			return usersRepository.findAll(pageable);
		} else {
			search = StringUtils.isNotBlank(search) ? ("%"+search+"%") : null;
			userType = StringUtils.isNotBlank(search) ? userType : null;
			return usersRepository.getUsersPage(search, userType, pageable);
		}
	}

	public List<Users> getUserList(String search, String userType) {
		search = StringUtils.isNotBlank(search) ? ("%"+search+"%") : null;
		userType = StringUtils.isNotBlank(search) ? userType : null;
		return usersRepository.getUsersList(search, userType);
	}

	public Users getUser(Long userId) {
		Optional<Users> user = usersRepository.findById(userId);
		return user.isPresent() ? user.get() : null;
	}

	public Users saveOrUpdateUser(Users user) {
		return usersRepository.save(user);
	}

	public void deleteUser(Long userId) {
		usersRepository.deleteById(userId);
	}

}
