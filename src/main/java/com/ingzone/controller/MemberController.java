package com.ingzone.controller;


import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Vote;
import com.ingzone.service.DatumService;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("/api/member")
@SessionAttributes("userId")
public class MemberController {

    @Autowired
    private NoticeService noticeService;

    @Autowired
    private DatumService datumService;

    @RequestMapping(value = "/getDatum", method = RequestMethod.GET)
    public Result getDatum(Page page) {
        if (page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.FAILURE;
        }
        return datumService.getDatum(page);
    }

    @RequestMapping(value = "uploadDatum", method = RequestMethod.POST)
    public Result uploadDatum(Datum datum, HttpSession session) {
        if(datum == null || datum.getTitle() == null || datum.getUrl() == null) {
            return ResultCache.FAILURE;
        }
        return datumService.insertDatum(datum, (Integer) session.getAttribute("id"));
    }

    @RequestMapping(value = "modifyDatum", method = RequestMethod.POST)
    public Result modifyDatum(Datum datum, HttpSession session) {
        if(datum == null || datum.getUrl() == null) {
            return ResultCache.FAILURE;
        }
        return datumService.updateDatum(datum, (Integer) session.getAttribute("id"), (String) session.getAttribute("role"));
    }

    @RequestMapping(value = "deleteDatum", method = RequestMethod.GET)
    public Result deleteDatum(@RequestParam("id") Integer id, HttpSession session) {
        if(id == null) {
            return ResultCache.FAILURE;
        }
        return datumService.deleteDatum(id, (Integer) session.getAttribute("id"), (String) session.getAttribute("role"));
    }
    @RequestMapping(value = "/getNotice", method = RequestMethod.GET)
    public Result getNotice(Page page) {
        return noticeService.getNotice(page);
    }


    @RequestMapping(value = "/vote", method = RequestMethod.POST)
    public Result vote(Vote vote) {
        return ResultCache.FAILURE;
    }

}
