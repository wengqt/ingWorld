package com.ingzone.dao;

import com.ingzone.domain.Notice;
import org.springframework.stereotype.Repository;

/**
 * Created by gzq on 17-5-10.
 */
@Repository
public interface NoticeDao {
    void uploadNotice(Notice notice);
}
