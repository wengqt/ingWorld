package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.Email;

/**
 * Created by gzq on 17-5-12.
 */
public interface EmailService {

    //发送简单消息
    Result sendEmail(Email email);

}
