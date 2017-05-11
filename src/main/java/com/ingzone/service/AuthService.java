package com.ingzone.service;

import com.ingzone.base.Result;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by omsfuk on 17-5-11.
 */

public interface AuthService {

    Result login(int id, String password, HttpSession session);

}
