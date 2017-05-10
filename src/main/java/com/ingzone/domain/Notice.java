package com.ingzone.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.nio.file.OpenOption;
import java.text.SimpleDateFormat;
import java.util.Date;

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


    private String options;


    private Date closing;

    public Notice(int type, String title, String content, String options, Date closing) {
        this.type = type;
        this.title = title;
        this.content = content;
        this.options = options;
        this.closing = closing;
    }
}
