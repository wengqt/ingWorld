package com.ingzone.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by gzq on 17-5-10.
 */

public class DateFormatUtil {

    public static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

    public static ThreadLocal<SimpleDateFormat> dateFormatThreadLocal = ThreadLocal.withInitial(() -> new SimpleDateFormat(PATTERN));

    public static Date formatDate(String date) throws ParseException {
        return dateFormatThreadLocal.get().parse(date);
    }

    public static String formatDateToString(Date date) {
        return dateFormatThreadLocal.get().format(date);
    }
}
