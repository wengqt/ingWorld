package com.ingzone.service;


import com.ingzone.model.dto.ActivityDTO;
import com.ingzone.model.vo.ActivityVO;

import java.util.List;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
public interface ActivityService {

    boolean uploadActivity(ActivityDTO activityDTO);

    boolean modifyActivity(ActivityDTO activityDTO);

    boolean deleteActivity(int id);

    List<ActivityVO> getActivity(int page, int rows);
}
