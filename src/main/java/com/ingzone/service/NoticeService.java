package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.Vote;

/**
 * Created by gzq on 17-5-10.
 */
public interface NoticeService {

    Result uploadNotice(Notice notice);

    Result deleteNotice(int id);

    Result getNotice(Page page);

    Result modifyNotice(Notice notice);

    Result vote(Vote vote, int userId);
}
