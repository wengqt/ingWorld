package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;
import com.ingzone.model.vo.NoticeVO;
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
public class MemberController {

    @Autowired
    private NoticeService noticeService;

    @Autowired
    private DatumService datumService;

    @RequestMapping(value = "/member/getNotice", method = RequestMethod.GET)
    public Result getNotice(int page, int rows) {
        if (page <= 0 || rows <= 0) {
            return ResultCache.FAILURE;
        }
        NoticeVO noticeVO = noticeService.getNotice(page, rows);
        if (noticeVO == null) {
            return ResultCache.FAILURE;
        }
        return ResultCache.getDataOk(noticeVO);
    }

    @RequestMapping(value = "/getDatum", method = RequestMethod.GET)
    public Result getDatum(Page page) {
        if (page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.FAILURE;
        }
        return datumService.getDatum(page);
    }

    @RequestMapping(value = "uploadDatum", method = RequestMethod.POST)
    public Result uploadDatum(Datum datum, @SessionAttribute("id") Integer userid) {
        if(datum == null || datum.getTitle() == null || datum.getUrl() == null) {
            return ResultCache.FAILURE;
        }
        return datumService.insertDatum(datum, userid);
    }

    @RequestMapping(value = "modifyDatum", method = RequestMethod.POST)
    public Result modifyDatum(Datum datum, @SessionAttribute("id") Integer userid, @SessionAttribute("role") String role) {
        if(datum == null || datum.getUrl() == null) {
            return ResultCache.FAILURE;
        }
        return datumService.updateDatum(datum, userid, role);
    }

    @RequestMapping(value = "deleteDatum", method = RequestMethod.GET)
    public Result deleteDatum(@RequestParam("id") Integer id, @SessionAttribute("id") Integer userid, @SessionAttribute("role") String role) {
        if(id == null) {
            return ResultCache.FAILURE;
        }
        return datumService.deleteDatum(id, userid, role);
    }
}
