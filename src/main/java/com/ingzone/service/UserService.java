package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.User;

import java.util.List;

/**
 * Created by gzq on 17-5-12.
 */
public interface UserService {
    Result modifyUserInfo(User user);

    List<String> getALLUserEmail();

}
