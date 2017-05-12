package com.ingzone.model.dto;

import lombok.Data;

import java.util.Date;

/**
 * Created by Administrator on 2017/5/10.
 */
@Data
public class ActivityDTO {

    private Integer id;
    private String name;
    private String date;
    private String group;
    private String shower;
    private String github;
    private String introduce;

}