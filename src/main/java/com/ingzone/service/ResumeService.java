package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Resume;
import org.springframework.stereotype.Service;

/**
 * Created by gzq on 17-5-12.
 */
public interface ResumeService {
    public Result uploadResume(Resume resume);
}
