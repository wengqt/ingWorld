package com.ingzone.service;


import com.ingzone.base.Result;
import com.ingzone.model.dto.ActivityDTO;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
public interface ActivityService {

    boolean uploadActivity(ActivityDTO activityDTO);

    boolean modifyActivity(ActivityDTO activityDTO);

    boolean deleteActivity(int id);

    Result getActivity(int page, int rows);
}
