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

    public static void main(String[] args) {
        Notice notice = new Notice(1, "title", "content", "2016-08-09 09:09:09");
        Option opt1 = new Option("a");
        Option opt2 = new Option("b");
        List<Option> option= new ArrayList<>(2);
        option.add(opt1);
        option.add(opt2);
        notice.setOption(option);
        System.out.println(JSON.toJSONString(notice));
    }
}
