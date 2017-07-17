package com.ingzone.model.dto;

import lombok.Data;
import lombok.ToString;

/**
 * Created by omsfuk on 17-5-11.
 */

@Data
@ToString
public class Datum {

    private Integer id;

    private String title;

    private String url;

    private String dataPublish;

    private Integer publisherId;

    private String publishTime;

}
