package com.ingzone.service.impl;

import com.ingzone.dao.NoticeDao;
import com.ingzone.domain.Notice;
import com.ingzone.domain.Option;
import com.ingzone.dto.NoticeDTO;
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
            if (notice.getType() != 0) {
                for (Option option : notice.getOption()) {
                    option.setNoticeId(notice.getId());
                    noticeDao.insertOptions(option);
                }
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public NoticeDTO getNotice(int page, int rows) {
        return null;
    }

    @Override
    public boolean deleteNotice(int id) {
        try {
            noticeDao.deleteNotice(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}