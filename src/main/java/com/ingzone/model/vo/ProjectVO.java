package com.ingzone.model.vo;

import com.ingzone.model.dto.Project;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * Created by omsfuk on 17-5-9.
 */

@Data
@AllArgsConstructor
public class ProjectVO {

    private Integer total;

    private List<Project> projects;
}
