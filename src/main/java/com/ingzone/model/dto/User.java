package com.ingzone.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.sql.Date;

/**
 * Created by omsfuk on 17-5-10.
 */


@Data
public class User {

    private Integer id;

    private String name;

    private String password;

    private Integer photoId = 1;

    private String introduce;

    private Integer group;

    private String major;

    private String grade;

    private String blog;

    private String phone;

    private String mail;

    private Date date;

    private String github;

    private String qq;

    @JsonIgnore
    private String role;

}
