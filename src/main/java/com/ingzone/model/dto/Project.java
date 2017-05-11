package com.ingzone.model.dto;

import lombok.Data;
import lombok.ToString;

import java.sql.Date;

/**
 * Created by omsfuk on 17-5-9.
 */

@Data
@ToString
public class Project {

    private Integer id;

    private String url;

    private String introduce;

    private String github;

    private Date date;

    private String game;

}
