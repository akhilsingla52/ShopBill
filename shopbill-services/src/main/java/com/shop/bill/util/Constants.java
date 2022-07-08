package com.shop.bill.util;

public final class Constants {
	
	private Constants() {}
	
	public static final String UTC_TIMEZONE = "UTC";
	
	public static final String DATE_FORMAT = "yyyy-MM-dd ";
	
	public static final String IMAGE_PATH = "src/main/resources/public/images/";
	
	public static final String ADMIN_URI = "rest/admin";
	
	public static final String OWNER_URI = "rest/owner";
	
	public static final String LOGINED_URI = "rest/user";
	
	public static final String COMMON_CODE_URI = ADMIN_URI + "/codes";
	
	public static final String PRODUCT_URI = OWNER_URI + "/product";
	
	public static final String USER_URI = OWNER_URI + "/user";
	
	public static final String INVOICE_URI = LOGINED_URI + "/invoice";
	
	
}
