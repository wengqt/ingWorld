package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.vo.NoticeVO;

/**
 * Created by gzq on 17-5-10.
 */
public interface NoticeService {

    Result uploadNotice(Notice notice, String option, String dateline);

    Result deleteNotice(int id);

    Result getNotice(int page, int rows);

    Result modifyNotice(Notice notice, String option, String closing);
}
