package com.ingzone.filter;

import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ingzone.cache.ResultCache;
import com.ingzone.model.dto.User;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by omsfuk on 17-5-11.
 */
public class AuthFilter implements Filter {

    /**
     * ObjectMapper线程安全
     */
    private static ObjectMapper mapper = new ObjectMapper();

    private static Map<String, String[]> authPattern = new HashMap<>();

    static {
        authPattern.put("/api/admin/", new String[] {"admin"});
        authPattern.put("/api/miniAdmin/", new String[] {"admin", "miniAdmin"});
        authPattern.put("/api/member/", new String[] {"admin", "miniAdmin", "member"});
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    private boolean auth(String url, String role) {
        if(role == null) {
            return false;
        }
        Set<Map.Entry<String, String[]>> keyValueSet = authPattern.entrySet();
        for(Map.Entry<String, String[]> keyValue : keyValueSet) {
            for(String requiredRole : keyValue.getValue()) {
                if (url.startsWith(keyValue.getKey()) && role.equals(requiredRole)) {
                    return true;
                }
            }
        }

        return false;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        // 假定session中有role和id
        User user = (User) request.getSession().getAttribute("user");
        String role = user.getRole();
        if(!auth(request.getServletPath(), role)) {
            PrintWriter writer = response.getWriter();
            writer.write(JSON.toJSONString(ResultCache.getCache(3)));
            writer.flush();
            return ;
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
