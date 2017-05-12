package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.Resume;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.User;
import com.ingzone.model.vo.ActivityVO;
import com.ingzone.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    
    @Autowired
    private ActivityService activityService;

    @RequestMapping(value = "/getProjectIntro", method = RequestMethod.GET)
    public Result getProjectIntro(Page page) {
        if (page == null || page.getPage() == null || page.getRows() == null || page.getPage() <= 0 || page.getRows() <= 0) {
            return ResultCache.FAILURE;
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

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Result login(User user, HttpSession session) {
        Map<String, String> map = new HashMap();
        if (user.getPassword() == null || user.getId() == null) {
            map.put("detail", "Wrong Parameter Format");
            Result result = ResultCache.getCache(0);
            result.setData(map);
            return result;
        }
        return authService.login(user.getId(), user.getPassword(), session);
    }

    @RequestMapping(value = "/uploadResume", method = RequestMethod.POST)
    public Result uploadResume(Resume resume) {
        return resumeService.uploadResume(resume);
    }

    @RequestMapping(value = "/getActivity",method = RequestMethod.GET)
    public Result getActivity() {
        List<ActivityVO> activityVOs = activityService.getActivity();
        if (activityVOs!=null){
            return ResultCache.getDataOk(activityVOs);
        }
        else{
            return ResultCache.FAILURE;
        }
    }
    
}
