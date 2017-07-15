package com.ingzone.model.vo;

import com.ingzone.model.dto.ActivityDTO;
import lombok.Data;

import java.util.Date;
import java.util.List;

/**
 * Created by Ji Shaokang on 2017/5/10.
 */
@Data
public class ActivityVO {

    private Integer total;

    private List<ActivityDTO> activities;

    public ActivityVO(Integer total, List<ActivityDTO> activities) {
        this.total = total;
        this.activities = activities;
    }
}
