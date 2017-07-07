package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.ActivityDTO;
import com.ingzone.model.dto.IngDTO;
import com.ingzone.service.NoticeService;
import com.ingzone.service.ProjectService;
import com.ingzone.service.ActivityService;
import com.ingzone.service.IngService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.mvc.condition.RequestConditionHolder;
import org.springframework.web.util.ServletContextPropertyUtils;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.HttpServletRequest;


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

    @Autowired
    private ActivityService activityService;

    @Autowired
    private IngService ingService;

    @Transactional
    @RequestMapping(value = "/uploadNotice", method = RequestMethod.POST)
    public Result uploadNotice(@RequestBody Notice notice) {
        return noticeService.uploadNotice(notice);

    }

    @RequestMapping(value = "/deleteNotice", method = RequestMethod.GET)
    public Result deleteNotice(int id) {
        return noticeService.deleteNotice(id);
    }

    @Transactional
    @RequestMapping(value = "/modifyNotice", method = RequestMethod.POST)
    public Result modifyNotice(@RequestBody Notice notice) {
        return noticeService.modifyNotice(notice);
    }

    @RequestMapping(value = "/uploadActivity", method = RequestMethod.POST)
    public Result uploadActivity(ActivityDTO activityDTO) {

        if (activityService.uploadActivity(activityDTO)){
            return ResultCache.OK;
        }
        else{
            return ResultCache.FAILURE;
        }

    }

    @RequestMapping(value = "/modifyStudio",method = RequestMethod.POST)
    public Result modifyStudio(IngDTO ingDTO) {
        if (ingService.modifyStudio(ingDTO)){
            return ResultCache.OK;
        }
        else{
            return ResultCache.FAILURE;
        }
    }

    @RequestMapping(value = "/modifyActivity", method = RequestMethod.POST)
    public Result modifyActivity(ActivityDTO activityDTO) {

        if (activityService.modifyActivity(activityDTO)){
            return ResultCache.OK;
        }
        else{
            return ResultCache.FAILURE;
        }

    }

    @RequestMapping(value = "/deleteActivity", method = RequestMethod.GET)
    public Result deleteActivity(int id) {

        if (activityService.deleteActivity(id)){
            return ResultCache.OK;
        }
        else{
            return ResultCache.FAILURE;
        }

    }

}