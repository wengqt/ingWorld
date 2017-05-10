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
}
