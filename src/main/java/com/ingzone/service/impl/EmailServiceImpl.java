package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.Email;
import com.ingzone.model.dto.Notice;
import com.ingzone.service.EmailService;
import com.ingzone.service.UserService;
import com.ingzone.util.EmailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by gzq on 17-5-12.
 */
@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private MailSender mailSender;

    @Autowired
    private UserService userService;

    @Value("${mail.username}")
    private String fromEmail;

    @Override
    public Result sendEmail(Email email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(email.getToEmail());
        message.setSubject(email.getSubject());
        message.setText(email.getContent());
        mailSender.send(message);
        return ResultCache.OK;
    }

    @Override
    public void sendNoticeToEveryOne(Notice notice) {
        List<String> emils = userService.getALLUserEmail();
        Email email = new Email();
        email.setSubject("ing通知" + " " + notice.getTitle());
        String content = EmailUtil.generateContentFromNotice(notice);
        email.setContent(content);
        emils.forEach((toEmail) -> {
            email.setToEmail(toEmail);
            sendEmail(email);
        });
    }
}
