package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.domain.Notice;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by gzq on 17-5-10.
 */

@RestController
@RequestMapping("/api/admin")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping(value = "/uploadNotice", method = RequestMethod.POST)
    public Result uploadNotice(int type, String title, String content, String option, String closing) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date closing2;
        try {
            closing2 = sdf.parse(closing);
        } catch (ParseException e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
        Notice notice = new Notice(type, title, content, option, closing2);
        System.out.println(notice);
        boolean success = noticeService.uploadNotice(notice);
        if (!success) {
            return ResultCache.FAILURE;
        }
        return ResultCache.OK;
    }




}
