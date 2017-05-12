package com.ingzone.model.dto;

import lombok.Data;

import java.util.List;

/**
 * Created by omsfuk on 17-5-10.
 */

@Data
public class Group {
    private Integer id;

    private Integer techStack;

    private String introduce;

    private List<User> members;
}
