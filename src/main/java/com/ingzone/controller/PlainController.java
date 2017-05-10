package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.IngDTO;
import com.ingzone.model.dto.Page;
import com.ingzone.service.GroupService;
import com.ingzone.service.IngService;
import com.ingzone.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by gzq on 17-5-10.
 */

@RestController
@RequestMapping("/api/plain")
public class PlainController{

    @Autowired
    private ProjectService projectService;

    @Autowired
    private GroupService groupService;

    @Autowired
    private IngService ingService;

    @RequestMapping(value = "/getProjectIntro", method = RequestMethod.GET)
    public Result getProjectIntro(Page page) {
        if(page == null || page.getPage() == null || page.getRows() == null || page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.getCache(0);
        }
        return projectService.getProjectIntro(page);
    }

    @RequestMapping(value = "/getGroupIntro", method = RequestMethod.GET)
    public Result getGroupIntro() {
        return groupService.getGroup();
    }

    @RequestMapping(value = "/getStudioIntro",method = RequestMethod.GET)
    public Result getStudioIntro() {
        return ResultCache.getDataOk(ingService.getStudioIntro());
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

}
