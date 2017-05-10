package com.ingzone.dto;

import com.ingzone.domain.Notice;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * Created by gzq on 17-5-10.
 */
@Data
@AllArgsConstructor
public class NoticeDTO {

    private Integer total;
    private List<Notice> notice;

}
