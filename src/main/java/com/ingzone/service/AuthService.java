package com.ingzone.service;

import com.ingzone.base.Result;
import com.sun.deploy.net.HttpResponse;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by omsfuk on 17-5-11.
 */

public interface AuthService {

    Result login(int id, String password, HttpSession session  , HttpServletResponse response);


    Result changePassword(String old, String newpw, int id);

}
