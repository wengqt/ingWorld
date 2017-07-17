package com.ingzone.dao;

import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Project;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by omsfuk on 17-5-9.
 */

@Repository
public interface ProjectDAO {


    Project getProjectById(int id);

    Integer getProjectCount();

    Integer insertProject(Project project);

    Integer updateProject(Project project);

    List<Project> getProject(@Param("begin") int begin, @Param("rows") int rows);
}
