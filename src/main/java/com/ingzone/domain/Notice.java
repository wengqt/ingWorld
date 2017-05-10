package com.ingzone.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.nio.file.OpenOption;
import java.text.SimpleDateFormat;
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

    private Date closing;

    public Notice(Integer type, String title, String content, List<Option> options, Date closing) {
        this.type = type;
        this.title = title;
        this.content = content;
        this.option = options;
        this.closing = closing;
    }
}
