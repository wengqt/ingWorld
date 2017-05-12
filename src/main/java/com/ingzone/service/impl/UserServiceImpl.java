package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.User;
import com.ingzone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by gzq on 17-5-12.
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public Result modifyUserInfo(User user) {
        try {
            userDAO.modifyUserInfo(user);
            return ResultCache.OK;
        } catch (Exception e) {
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
    }
}
