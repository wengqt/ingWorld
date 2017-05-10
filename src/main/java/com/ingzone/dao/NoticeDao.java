package com.ingzone.dao;

import com.ingzone.domain.Notice;
import com.ingzone.domain.Option;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by gzq on 17-5-10.
 */
@Repository
public interface NoticeDao {
    void uploadNotice(Notice notice);

    void deleteNotice(int id);

    void insertOptions(Option option);
}
