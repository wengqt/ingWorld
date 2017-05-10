package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.ProjectDao;
import com.ingzone.domain.Project;
import com.ingzone.dto.ProjectDto;
import com.ingzone.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by omsfuk on 17-5-9.
 */

@RestController
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/api", method = RequestMethod.GET)
    public Result getProjectIntro(@RequestParam("page") Integer page, @RequestParam("rows") Integer rows) {
        if(page < 0 || rows <= 0) {
            return ResultCache.getCache(0);
        }
        return ResultCache.getDataOk(projectService.getProjectIntro(page, rows));
    }
}
