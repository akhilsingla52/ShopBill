package com.shop.bill.util;

import java.time.Instant;

public final class DateUtil {
	
	private DateUtil() {}
	
	public static long currentTimeMillis() {
		return Instant.now().toEpochMilli();
	}

}
