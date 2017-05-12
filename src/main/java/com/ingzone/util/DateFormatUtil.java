package com.ingzone.util;

import com.alibaba.fastjson.JSON;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
