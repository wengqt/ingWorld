package com.ingzone.model.dto;

import lombok.Data;

import java.util.List;

/**
 * Created by gzq on 17-5-12.
 */
@Data
public class Vote {

    private Integer id;

    private String optionId;

    private Integer noticeId;

    private Integer userId;

    private String date;

    private List<Integer> optionIdList;
}
