package com.ingzone.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.ToString;

import java.sql.Timestamp;

/**
 * Created by omsfuk on 17-5-9.
 */

@Data
@ToString
public class Project {

    private Integer id;

    private Integer ownerId;

    private String url;

    private String introduce;

    private String github;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Timestamp date;

    private String game;

}
