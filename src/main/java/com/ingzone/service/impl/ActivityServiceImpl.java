package com.ingzone.service.impl;

import com.ingzone.dao.ActivityDao;
import com.ingzone.model.dto.ActivityDTO;
import com.ingzone.model.vo.ActivityVO;
import com.ingzone.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("activityService")
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    ActivityDao activityDao;

    @Override
    public boolean uploadActivity(ActivityDTO activityDTO) {
        if (activityDao.add(activityDTO)!=0) {
            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public boolean modifyActivity(ActivityDTO activityDTO) {

        if (activityDao.update(activityDTO)!=0) {
            return true;
        }
        else {
            return false;
        }

    }

    @Override
    public boolean deleteActivity(int id) {

        if (activityDao.delete(id)!=0) {
            return true;
        }
        else {
            return false;
        }

    }

    @Override
    public List<ActivityVO> getActivity() {
        return activityDao.select();
    }
}
