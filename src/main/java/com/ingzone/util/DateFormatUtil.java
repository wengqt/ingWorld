package com.ingzone.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by gzq on 17-5-10.
 */

public class DateFormatUtil {

    public static final String PATTERN = "yyyy-MM-dd";

    public static ThreadLocal<SimpleDateFormat> dateFormatThreadLocal = new ThreadLocal<SimpleDateFormat>();

    public static Date formatData(String date) throws ParseException {
        SimpleDateFormat dateFormator = getDateFormator();
        return dateFormator.parse(date);
    }

    private static SimpleDateFormat getDateFormator() {
        SimpleDateFormat dateFormat = dateFormatThreadLocal.get();
        if (dateFormat == null) {
            dateFormat = new SimpleDateFormat(PATTERN);
            dateFormatThreadLocal.set(dateFormat);
        }
        return dateFormat;
    }

}
