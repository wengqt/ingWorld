package com.ingzone.domain;

import lombok.Data;

/**
 * Created by gzq on 17-5-10.
 */
@Data
public class Option {

    private Integer id;
    private Integer noticeId;
    private String content;
    private Integer sum;

    public Option(String content) {
        this.content = content;
    }
}
