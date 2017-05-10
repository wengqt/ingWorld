package com.ingzone.dao;

import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by gzq on 17-5-10.
 */
@Repository
public interface NoticeDao {
    void uploadNotice(Notice notice);

    void deleteNotice(int id);

    void insertOptions(Option option);

    int getTotalNumber();

    List<Notice> getNotice(int begin, int rows);
}
