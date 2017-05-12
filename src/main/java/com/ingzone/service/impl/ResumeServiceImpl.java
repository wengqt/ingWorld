package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.ResumeDao;
import com.ingzone.model.dto.Resume;
import com.ingzone.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by gzq on 17-5-12.
 */
@Service
public class ResumeServiceImpl implements ResumeService {

    @Autowired
    private ResumeDao resumeDao;

    @Override
    public Result uploadResume(Resume resume) {
        try {
            resumeDao.uploadResume(resume);
            return ResultCache.OK;
        } catch (Exception e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
    }

}
