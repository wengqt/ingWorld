package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Resume;
import com.ingzone.model.dto.IngDTO;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.User;
import com.ingzone.service.AuthService;
import com.ingzone.service.GroupService;
import com.ingzone.service.IngService;
import com.ingzone.service.ProjectService;
import com.ingzone.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by gzq on 17-5-10.
 */

@RestController
@RequestMapping("/api/plain")
public class PlainController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private GroupService groupService;

    @Autowired
    private AuthService authService;

    @Autowired
    private IngService ingService;

    @Autowired
    private ResumeService resumeService;

    @RequestMapping(value = "/getProjectIntro", method = RequestMethod.GET)
    public Result getProjectIntro(Page page) {
        if (page == null || page.getPage() == null || page.getRows() == null || page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.getCache(0);
        }
        return projectService.getProjectIntro(page);
    }

    @RequestMapping(value = "/getGroupIntro", method = RequestMethod.GET)
    public Result getGroupIntro() {
        return groupService.getGroup();
    }

    @RequestMapping(value = "/getStudioIntro", method = RequestMethod.GET)
    public Result getStudioIntro() {
        return ResultCache.getDataOk(ingService.getStudioIntro());
    }

    @RequestMapping(value = "/modifyStudio", method = RequestMethod.POST)
    public Result modifyStudio(IngDTO ingDTO) {
        if (ingService.modifyStudio(ingDTO)) {
            return ResultCache.OK;
        } else {
            return ResultCache.FAILURE;
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Result login(User user, HttpSession session) {
        if (user.getPassword() == null || user.getId() == null) {
            return ResultCache.FAILURE;
        }
        return authService.login(user.getId(), user.getPassword(), session);
    }

    @RequestMapping(value = "/uploadResume", method = RequestMethod.POST)
    public Result uploadResume(Resume resume) {
        return resumeService.uploadResume(resume);
    }

}
