package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.User;
import com.ingzone.service.AuthService;
import com.ingzone.util.CryptUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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
    public Result login(int id, String password, HttpSession session, HttpServletResponse response) {
        Map<String, String> map = new HashMap();
        User user = userDAO.getUserById(id);

        if (user == null) {
            map.put("detail", "Wrong Parameter Format");
            Result result = ResultCache.getCache(0);
            result.setData(map);
            return result;
        }

        if (!checkPassword(user, password)) {
            map.put("detail", "Wrong Password");
            Result result = ResultCache.getCache(0);
            result.setData(map);
            return result;
        }

        session.setAttribute("id", id);
        session.setAttribute("role", user.getRole());

        Cookie loginCookie = new Cookie("login", "1");
        loginCookie.setPath("/");
        response.addCookie(loginCookie);

        return ResultCache.OK;
    }

    @Override
    public Result changePassword(String old, String newpw, int id) {
        User user = userDAO.getUserById(id);
        if (!checkPassword(user, old)) {
            HashMap<String, String> map = new HashMap();
            map.put("detail","wrong old password ");
            Result result = ResultCache.getCache(0);
            result.setData(map);
            return result;
        }
        userDAO.changePassword(id,CryptUtil.getSHA1(newpw));
        return ResultCache.OK;
    }


    private boolean checkPassword(User user, String password) {
        if (!CryptUtil.getSHA1(password).equals(user.getPassword())) {
            return false;
        }
        return true;
    }
}
