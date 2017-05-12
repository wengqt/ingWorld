package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.User;

/**
 * Created by gzq on 17-5-12.
 */
public interface UserService {
    Result modifyUserInfo(User user);
}
