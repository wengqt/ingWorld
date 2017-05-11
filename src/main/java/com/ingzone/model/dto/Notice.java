package com.ingzone.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

/**
 * Created by gzq on 17-5-10.
 */

@Data
@NoArgsConstructor
public class Notice {

    private Integer id;

    private Integer type;

    private String title;

    private String content;

    private List<Option> option;     //选项名用 ,

    private Date date;

    private Date deadline;


    public Notice(Integer type, String title, String content, Date deadline) {
        this.type = type;
        this.title = title;
        this.content = content;
        this.deadline = deadline;
    }
}
