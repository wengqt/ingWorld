package com.ingzone.dao;

import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;
import com.ingzone.model.dto.Vote;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by gzq on 17-5-10.
 */
@Repository
public interface NoticeDao {
    void uploadNotice(Notice notice);

    void deleteNotice(int id);

    void insertOptions(List<Option> option);

    int getTotalNumber();

    List<Notice> getNotice(@Param("begin") int begin,@Param("rows") int rows);

    List<Option> getOptions(int noticeId);

    void modifyNotice(Notice notice);

    void deleteOptions(int id);

    int getVoteNumber(int optionId);

    void insertVote(Vote vote);
}
