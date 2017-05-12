package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Resume;

/**
 * Created by gzq on 17-5-12.
 */
public interface ResumeService {
    public Result uploadResume(Resume resume);
}
