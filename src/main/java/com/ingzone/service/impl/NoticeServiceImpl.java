package com.ingzone.service.impl;

import com.ingzone.dao.NoticeDao;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;
import com.ingzone.model.vo.NoticeVO;
import com.ingzone.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public boolean deleteNotice(int id) {
        try {
            noticeDao.deleteNotice(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public NoticeVO getNotice(int page, int rows) {
        int begin = (page - 1) * rows;
        try {
            int total = noticeDao.getTotalNumber();
            List<Notice> notice = noticeDao.getNotice(begin, rows);
            NoticeVO noticeVO = new NoticeVO(total, notice);
            return noticeVO;
        } catch (Exception e) {
            return null;
        }
    }

}