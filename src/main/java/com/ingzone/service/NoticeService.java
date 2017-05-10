package com.ingzone.service;

import com.ingzone.domain.Notice;
import org.springframework.stereotype.Service;

/**
 * Created by gzq on 17-5-10.
 */
public interface NoticeService {

    boolean uploadNotice(Notice notice);
}
