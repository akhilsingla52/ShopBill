package com.shop.bill.owner.rest;

import static com.shop.bill.util.Constants.USER_URI;

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

import com.shop.bill.entity.Users;
import com.shop.bill.owner.service.UserService;

@RestController
@RequestMapping(USER_URI)
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/page")
	public ResponseEntity<?> getUserPage(@RequestParam String search, @RequestParam String userType, 
											@PageableDefault(page = 0, size = 10) Pageable pageable) {
		return ResponseEntity.ok(userService.getUserPage(search, userType, pageable));
	}
	
	@GetMapping("/list")
	public ResponseEntity<?> getUserList(@RequestParam String search, @RequestParam String userType) {
		return ResponseEntity.ok(userService.getUserList(search, userType));
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUser(@PathVariable Long userId) {
		return ResponseEntity.ok(userService.getUser(userId));
	}
	
	@PostMapping
	public ResponseEntity<?> saveOrUpdateUser(@RequestBody Users user) {
		return ResponseEntity.ok(userService.saveOrUpdateUser(user));
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
		userService.deleteUser(userId);
		return ResponseEntity.ok("User Deleted");
	}

}
