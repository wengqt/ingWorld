package com.ingzone.util;

import com.ingzone.model.dto.Notice;
import com.ingzone.model.dto.Option;

import java.util.Date;
import java.util.List;

/**
 * Created by gzq on 17-5-12.
 */
public class EmailUtil {


    public static String generateContentFromNotice(Notice notice) {
        StringBuilder sb = new StringBuilder();
        if (notice.getType() != 0) {
            sb.append("投票通知").append("\n");
        }
        sb.append("\t").append(notice.getContent()).append("\n\n");
        if (notice.getType() != 0) {
            sb.append("选项 ： ");
            List<Option> opts = notice.getOption();
            opts.forEach((opt) -> sb.append(opt.getContent()).append(" "));
            sb.append("\n\n");
        }
        sb.append("通知日期 : ").append(DateFormatUtil.formatDateToString(new Date())).append("\n");
        sb.append("失效日期 : ").append(notice.getDeadline()).append("\n");
        return sb.toString();
    }
}
