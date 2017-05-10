package com.ingzone.service.impl;

import com.ingzone.dao.NoticeDao;
import com.ingzone.domain.Notice;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.ws.soap.Addressing;

/**
 * Created by gzq on 17-5-10.
 */
@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeDao noticeDao;

    @Override
    public boolean uploadNotice(Notice notice) {
        try {
            noticeDao.uploadNotice(notice);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}