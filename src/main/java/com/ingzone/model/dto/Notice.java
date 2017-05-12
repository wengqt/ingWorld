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

    private List<Option> option;

    private String date;

    private String deadline;


    public Notice(Integer type, String title, String content, String deadline) {
        this.type = type;
        this.title = title;
        this.content = content;
        this.deadline = deadline;
    }
}
