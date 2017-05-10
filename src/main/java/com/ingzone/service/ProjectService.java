package com.ingzone.service;

import com.ingzone.model.dto.ProjectDto;

/**
 * Created by omsfuk on 17-5-9.
 */
public interface ProjectService {

    ProjectDto getProjectIntro(Integer page, Integer rows);

}
