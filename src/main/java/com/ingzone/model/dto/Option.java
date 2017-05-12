package com.ingzone.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by gzq on 17-5-10.
 */
@Data
@NoArgsConstructor
public class Option {

    private Integer id;
    private Integer noticeId;
    private String content;
    private Integer sum;


    public Option(String content) {
        this.content = content;
    }
}
