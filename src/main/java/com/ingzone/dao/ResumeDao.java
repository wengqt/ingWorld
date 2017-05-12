package com.ingzone.dao;

import com.ingzone.model.dto.Resume;
import org.springframework.stereotype.Repository;

/**
 * Created by gzq on 17-5-12.
 */
@Repository
public interface ResumeDao {

    void uploadResume(Resume resume);
}
