package com.ingzone.service.impl;

import com.ingzone.dao.ProjectDao;
import com.ingzone.model.dto.Project;
import com.ingzone.model.dto.ProjectDto;
import com.ingzone.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by omsfuk on 17-5-9.
 */

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDao projectDao;

    public ProjectDto getProjectIntro(Integer page, Integer rows) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("begin", page * rows);
        map.put("rows", rows);
        List<Project> projectList = projectDao.getProject(map);
        Integer count = projectDao.getProjectCount();

        return new ProjectDto(count, projectList);
    }
}
