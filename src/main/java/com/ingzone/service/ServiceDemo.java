package com.ingzone.service;

import com.ingzone.dao.ProjectDAO;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by omsfuk on 17-5-11.
 */

@Service

public class ServiceDemo {

    @Autowired
    private ProjectDAO projectDAO;

    @Autowired
    private ProjectService projectService;

    //如果可以传播，则无法回滚
    //否则，可以正常回滚

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void methodA() throws Exception {

        Project project = new Project();
        project.setGame("failure");
        projectDAO.insertProject(project);

        methodB();
    }

    @Transactional(propagation = Propagation.NEVER)
    public void methodB() throws Exception {
        Project project = new Project();
        project.setGame("failure");
        projectDAO.insertProject(project);

    }
}
