package com.ingzone.service;

import com.ingzone.model.dto.Notice;
import com.ingzone.model.vo.NoticeVO;

/**
 * Created by gzq on 17-5-10.
 */
public interface NoticeService {

    boolean uploadNotice(Notice notice);

    boolean deleteNotice(int id);

    NoticeVO getNotice(int page, int rows);
}
