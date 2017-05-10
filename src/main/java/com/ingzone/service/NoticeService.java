package com.ingzone.service;

import com.ingzone.domain.Notice;
import com.ingzone.dto.NoticeDTO;
import org.springframework.stereotype.Service;

/**
 * Created by gzq on 17-5-10.
 */
public interface NoticeService {

    boolean uploadNotice(Notice notice);

    boolean deleteNotice(int id);

    NoticeDTO getNotice(int page, int rows);
}
