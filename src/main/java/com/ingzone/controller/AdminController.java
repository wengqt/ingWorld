package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;
import com.ingzone.service.NoticeService;
import com.ingzone.util.DateFormatUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping(value = "/uploadNotice", method = RequestMethod.POST)
    public Result uploadNotice(int type, String title, String content, String option, String closing) {
        Date closing2;
        try {
            closing2 = DateFormatUtil.formatData(closing);
        } catch (ParseException e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
        String[] options = option.split(",");
        ArrayList<Option> optionlist = new ArrayList();
        for (String opt : options) {
            optionlist.add(new Option(opt));
        }
        Notice notice = new Notice(type, title, content, optionlist, closing2);
        if (!noticeService.uploadNotice(notice)) {
            return ResultCache.FAILURE;
        }
        return ResultCache.OK;
    }

    @RequestMapping(value = "/admin/deleteNotice", method = RequestMethod.GET)
    public Result deleteNotice(int id) {
        if (id <= 0) {
            return ResultCache.FAILURE;
        }
        boolean success = noticeService.deleteNotice(id);
        if (!success) {
            return ResultCache.FAILURE;
        }
        return ResultCache.OK;
    }


}
