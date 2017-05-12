package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.User;
import com.ingzone.service.AuthService;
import com.ingzone.util.CryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by omsfuk on 17-5-11.
 */

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public Result login(int id, String password, HttpSession session) {
        Map<String, Integer> map = new HashMap();
        User user = userDAO.getUserById(id);

        if(user == null) {
            map.put("result", 0);
            return ResultCache.getDataOk(map);
        }

        System.out.println(CryptUtil.getSHA1(password));

        if(!CryptUtil.getSHA1(password).equals(user.getPassword())) {
            map.put("result", 0);
            return ResultCache.getDataOk(map);
        }

        session.setAttribute("id", id);
        session.setAttribute("role", user.getRole());
        map.put("result", 1);
        return ResultCache.getDataOk(map);
    }
}
