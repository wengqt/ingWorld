package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Project;
import com.ingzone.service.NoticeService;
import com.ingzone.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private NoticeService noticeService;

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/uploadNotice", method = RequestMethod.POST)
    public Result uploadNotice(Notice notice, String option, String closing) {
        return noticeService.uploadNotice(notice, option, closing);
    }

    @RequestMapping(value = "/deleteNotice", method = RequestMethod.GET)
    public Result deleteNotice(int id) {
        return noticeService.deleteNotice(id);
    }

    @RequestMapping(value = "/modifyNotice", method = RequestMethod.POST)
    public Result modifyNotice(Notice notice, String option, String closing) {

        return noticeService.modifyNotice(notice, option, closing);
    }


    @RequestMapping(value = "/uploadProject", method = RequestMethod.POST)
    public Result uploadProject(Project project) {
        if (project == null) {
            return ResultCache.getCache(0);
        }

        return projectService.uploadProject(project);

    }

    @RequestMapping(value = "/modifyProject", method = RequestMethod.POST)
    public Result modifyProject(@RequestBody Project project) {
        if (project == null) {
            return ResultCache.getCache(0);
        }
        return projectService.modifyProject(project);
    }

}
