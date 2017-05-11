package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.NoticeDao;
import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;
import com.ingzone.model.vo.NoticeVO;
import com.ingzone.service.NoticeService;
import com.ingzone.util.DateFormatUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by gzq on 17-5-10.
 */
@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeDao noticeDao;

    @Override
    public Result uploadNotice(Notice notice, String option, String dateline) {
        Date closing;
        try {
            closing = DateFormatUtil.formatData(dateline);
        } catch (ParseException e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
        notice.setDeadline(closing);
        String[] options = option.split(",");
        try {
            noticeDao.uploadNotice(notice);
            if (notice.getType() != 0) {
                Option opt = new Option();
                opt.setNoticeId(notice.getId());
                for (String optionName : options) {
                    opt.setContent(optionName);
                    noticeDao.insertOptions(opt);
                }
            }
            return ResultCache.OK;
        } catch (Exception e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
    }

    @Override
    public Result modifyNotice(Notice notice, String option, String closing) {
        Date deadline;
        try {
            deadline = DateFormatUtil.formatData(closing);
        } catch (ParseException e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
        notice.setDeadline(deadline);
        String[] options = option.split(",");
        try {
            noticeDao.modifyNotice(notice);
            noticeDao.deleteOptions(notice.getId());
            if (notice.getType() == 0) {
                return ResultCache.OK;
            }
            Option opt = new Option();
            opt.setNoticeId(notice.getId());
            for (String optionName : options) {
                opt.setContent(optionName);
                noticeDao.insertOptions(opt);
            }

            return ResultCache.OK;
        } catch (
                Exception e)

        {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }

    }


    @Override
    public Result deleteNotice(int id) {
        try {
            noticeDao.deleteNotice(id);
            return ResultCache.OK;
        } catch (Exception e) {
            return ResultCache.FAILURE;
        }
    }

    @Override
    public Result getNotice(int page, int rows) {
        int begin = (page - 1) * rows;
        try {
            int total = noticeDao.getTotalNumber();
            List<Notice> notice = noticeDao.getNotice(begin, rows);
            NoticeVO noticeVO = new NoticeVO(total, notice);
            return ResultCache.getDataOk(noticeVO);
        } catch (Exception e) {
            return null;
        }
    }


}