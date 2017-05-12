package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Vote;
import com.ingzone.model.vo.NoticeVO;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.client.support.HttpAccessor;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("/api/member")
@SessionAttributes("userId")
public class MemberController {

    @Autowired
    private NoticeService noticeService;

    @RequestMapping(value = "/getNotice", method = RequestMethod.GET)
    public Result getNotice(Page page) {
        return noticeService.getNotice(page);
    }


    @RequestMapping(value = "/vote", method = RequestMethod.POST)
    public Result vote(Vote vote) {
        return ResultCache.FAILURE;
    }

}
