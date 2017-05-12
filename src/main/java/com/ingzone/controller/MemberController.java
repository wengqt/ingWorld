package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;
import com.ingzone.model.vo.NoticeVO;
import com.ingzone.service.DatumService;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(value = "/getDatum")
    public Result getDatum(Page page) {
        if (page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.FAILURE;
        }
        return datumService.getDatum(page);
    }

    @RequestMapping(value = "uploadDatum")
    public Result uploadDatum(Datum datum, HttpSession session) {
        if(datum == null || datum.getTitle() == null || datum.getUrl() == null) {
            return ResultCache.getCache(0);
        }

        datum.setDataPublish(null);
        return null;
    }
}
