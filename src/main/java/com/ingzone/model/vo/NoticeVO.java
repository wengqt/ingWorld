package com.ingzone.model.vo;

import com.ingzone.model.dto.Notice;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * Created by gzq on 17-5-10.
 */
@Data
@AllArgsConstructor
public class NoticeVO {

    private Integer total;
    private List<Notice> notice;

}
