package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Project;

/**
 * Created by omsfuk on 17-5-9.
 */
public interface ProjectService {

    Result getProjectIntro(Page page);

    Result uploadProject(Project project, Integer userid);

    Result modifyProject(Project project, Integer userid, String role);
}
