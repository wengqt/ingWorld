package com.ingzone.controller;


import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.*;
import com.ingzone.service.DatumService;
import com.ingzone.service.NoticeService;
import com.ingzone.service.ProjectService;
import com.ingzone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("/api/member")
@SessionAttributes("userId")
public class MemberController {

    @ModelAttribute
    private void init(ModelMap modelMap) {
        modelMap.addAttribute("userId", 11);
    }

    @Autowired
    private NoticeService noticeService;

    @Autowired
    private DatumService datumService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "test", method = RequestMethod.GET)
    public void test(@ModelAttribute("userid") Integer userid) {
        System.out.println(userid);
    }

    @RequestMapping(value = "/getDatum", method = RequestMethod.GET)
    public Result getDatum(Page page) {
        if (page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.FAILURE;
        }
        return datumService.getDatum(page);
    }

    @RequestMapping(value = "/uploadDatum", method = RequestMethod.POST)
    public Result uploadDatum(Datum datum, HttpSession session) {
        if (datum == null || datum.getTitle() == null || datum.getUrl() == null) {
            return ResultCache.FAILURE;
        }
        return datumService.insertDatum(datum, (Integer) session.getAttribute("id"));
    }

    @RequestMapping(value = "/modifyDatum", method = RequestMethod.POST)
    public Result modifyDatum(Datum datum, HttpSession session) {
        if (datum == null || datum.getUrl() == null) {
            return ResultCache.FAILURE;
        }
        return datumService.updateDatum(datum, (Integer) session.getAttribute("id"), (String) session.getAttribute("role"));
    }

    @RequestMapping(value = "/deleteDatum", method = RequestMethod.GET)
    public Result deleteDatum(@RequestParam("id") Integer id, HttpSession session) {
        if (id == null) {
            return ResultCache.FAILURE;
        }
        return datumService.deleteDatum(id, (Integer) session.getAttribute("id"), (String) session.getAttribute("role"));
    }

    @RequestMapping(value = "/getNotice", method = RequestMethod.GET)
    public Result getNotice(Page page) {
        return noticeService.getNotice(page);
    }


    @Transactional
    @RequestMapping(value = "/vote", method = RequestMethod.POST)
    public Result vote(Vote vote ,@SessionAttribute("id") int id ) {
        return noticeService.vote(vote , id);
    }


    @RequestMapping(value = "/modifyUserInfo", method = RequestMethod.POST)
    public Result modifyUserInfo(User user) {
        return userService.modifyUserInfo(user);
    }

    @RequestMapping(value = "/uploadProject", method = RequestMethod.POST)
    public Result uploadProject(Project project, HttpSession session) {
        if (project == null) {
            return ResultCache.getCache(0);
        }

        return projectService.uploadProject(project, (Integer) session.getAttribute("id"));
    }

    @RequestMapping(value = "/modifyProject", method = RequestMethod.POST)
    public Result modifyProject(@RequestBody Project project, HttpSession session) {
        if (project == null) {
            return ResultCache.getCache(0);
        }
        return projectService.modifyProject(project, (Integer) session.getAttribute("id"), (String) session.getAttribute("role"));
    }
}
