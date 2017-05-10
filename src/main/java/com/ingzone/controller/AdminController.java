package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;
import com.ingzone.model.dto.Project;
import com.ingzone.service.NoticeService;
import com.ingzone.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sun.java2d.pipe.SpanShapeRenderer;

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

    @Autowired
    private ProjectService projectService;

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
        String[] options = option.split(",");
        ArrayList<Option> optionlist = new ArrayList();
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

    @RequestMapping(value = "/deleteNotice", method = RequestMethod.GET)
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

    @RequestMapping(value = "/uploadProject", method = RequestMethod.POST)
    public Result uploadProject(Project project) {
        if(project == null) {
            return ResultCache.getCache(0);
        }
        System.out.println(project.getDate());

        return projectService.uploadProject(project);

    }

    @RequestMapping(value = "/modifyProject", method = RequestMethod.POST)
    public Result modifyProject(@RequestBody Project project) {
        if(project == null) {
            return ResultCache.getCache(0);
        }
        return projectService.modifyProject(project);
    }

}
