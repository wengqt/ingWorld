package com.ingzone.dao;

import com.ingzone.model.dto.Project;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by omsfuk on 17-5-9.
 */

@Repository
public interface ProjectDao {

    List<Project> getProject(Map<String, Object> map);

    Integer getProjectCount();
}
