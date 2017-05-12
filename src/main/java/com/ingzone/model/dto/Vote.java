package com.ingzone.model.dto;

import lombok.Data;

/**
 * Created by gzq on 17-5-12.
 */
@Data
public class Vote {

    private Integer id;
    private Integer optionId;
    private Integer noticeId;
    private Integer userId;
    private String date;

}
