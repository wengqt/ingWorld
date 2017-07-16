package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.ActivityDao;
import com.ingzone.model.dto.ActivityDTO;
import com.ingzone.model.dto.Page;
import com.ingzone.model.vo.ActivityVO;
import com.ingzone.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("activityService")
@Transactional
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    ActivityDao activityDao;

    @Override
    public boolean uploadActivity(ActivityDTO activityDTO) {
        if (activityDao.add(activityDTO) != 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean modifyActivity(ActivityDTO activityDTO) {

        if (activityDao.update(activityDTO) != 0) {
            return true;
        } else {
            return false;
        }

    }

    @Override
    public boolean deleteActivity(int id) {

        if (activityDao.delete(id) != 0) {
            return true;
        } else {
            return false;
        }

    }

    @Override
    public Result getActivity(Page page) {
        int total = activityDao.getActivityCount();
        return ResultCache.getDataOk(new ActivityVO(total, activityDao.select((page.getPage() - 1) * page.getRows(), page.getRows())));
    }
}
