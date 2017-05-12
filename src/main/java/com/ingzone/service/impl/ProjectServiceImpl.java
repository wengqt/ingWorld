package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.ProjectDAO;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Project;
import com.ingzone.model.vo.ProjectVO;
import com.ingzone.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by omsfuk on 17-5-9.
 */

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDAO projectDAO;

    @Override
    public Result getProjectIntro(Page page) {
        page.setPage(page.getPage() - 1);
        List<Project> projectList = projectDAO.getProject(page);
        Integer count = projectDAO.getProjectCount();
        return ResultCache.getDataOk(new ProjectVO(count, projectList));
    }

    @Override
    @Transactional(propagation = Propagation.NEVER)
    public Result uploadProject(Project project) {
        projectDAO.insertProject(project);
        return ResultCache.getCache(1);
    }

    @Override
    public Result modifyProject(Project project) {
        if(projectDAO.updateProject(project) != 1) {
            return ResultCache.getCache(0);
        }
        return ResultCache.getCache(1);
    }
}
