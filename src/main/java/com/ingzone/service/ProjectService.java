package com.ingzone.service;

import com.ingzone.domain.Project;
import com.ingzone.dto.ProjectDto;

import java.util.List;

/**
 * Created by omsfuk on 17-5-9.
 */
public interface ProjectService {

    ProjectDto getProjectIntro(Integer page, Integer rows);

}
