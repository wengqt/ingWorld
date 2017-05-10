package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.domain.Notice;
import com.ingzone.domain.Option;
import com.ingzone.dto.NoticeDTO;
import com.ingzone.service.NoticeService;
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
@RequestMapping("/api")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping(value = "/admin/uploadNotice", method = RequestMethod.POST)
    public Result uploadNotice(int type, String title, String content, String option, String closing) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date closing2;
        try {
            closing2 = sdf.parse(closing);
        } catch (ParseException e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
        String[] options = option.split(",");
        ArrayList<Option> optionlist = new ArrayList<>();
        for (String opt : options) {
            optionlist.add(new Option(opt));
        }
        Notice notice = new Notice(type, title, content, optionlist, closing2);
        boolean success = noticeService.uploadNotice(notice);
        if (!success) {
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

    @RequestMapping(value = "/member/getNotice", method = RequestMethod.GET)
    public Result getNotice(int page, int rows) {
        if (page <= 0 || rows <= 0) {
            return ResultCache.FAILURE;
        }
        NoticeDTO noticeDTO = noticeService.getNotice(page, rows);
        if (noticeDTO == null) {
            return ResultCache.FAILURE;
        }
        return ResultCache.getDataOk(noticeDTO);
    }

}
