package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.ProjectDAO;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Project;
import com.ingzone.model.dto.User;
import com.ingzone.model.vo.ProjectVO;
import com.ingzone.service.ProjectService;
import com.ingzone.util.AuthPrivilegeUtil;
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

    @Autowired
    private UserDAO userDAO;

    @Override
    public Result getProjectIntro(Page page) {
        page.setPage(page.getPage() - 1);
        List<Project> projectList = projectDAO.getProject(page);
        Integer count = projectDAO.getProjectCount();
        return ResultCache.getDataOk(new ProjectVO(count, projectList));
    }

    @Override
    public Result uploadProject(Project project, Integer userid) {
        project.setOwnerId(userid);
        projectDAO.insertProject(project);
        return ResultCache.OK;
    }


    @Override
    public Result modifyProject(Project project, Integer userid, String role) {
        Project ownerProject = projectDAO.getProjectById(project.getId());
        User owner = userDAO.getUserById(ownerProject.getId());
        return AuthPrivilegeUtil.operateWithPrivilege(ownerProject.getOwnerId(), userid, owner.getRole(), role,
                () -> projectDAO.updateProject(project) == 1 ? ResultCache.OK : ResultCache.FAILURE);
    }
}
