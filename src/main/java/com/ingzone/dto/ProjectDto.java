package com.ingzone.dto;

import com.ingzone.domain.Project;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * Created by omsfuk on 17-5-9.
 */

@Data
@AllArgsConstructor
public class ProjectDto {

    private Integer total;

    private List<Project> projects;
}
