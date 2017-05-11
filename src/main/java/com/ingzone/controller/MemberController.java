package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Page;
import com.ingzone.model.vo.NoticeVO;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("/api/member")
public class MemberController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping(value = "/getNotice", method = RequestMethod.GET)
    public Result getNotice(Page page) {
        return noticeService.getNotice(page);
    }
}
