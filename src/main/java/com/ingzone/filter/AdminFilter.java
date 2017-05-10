package com.ingzone.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ingzone.cache.ResultCache;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by omsfuk on 17-5-11.
 */
public class AdminFilter implements Filter {

    /**
     * ObjectMapper线程安全
     */
    private ObjectMapper mapper = new ObjectMapper();

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        // 假定session中有role和id
        String role = (String) request.getSession().getAttribute("role");
        if("Admin".equals(role)) {
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            PrintWriter writer = response.getWriter();
            mapper.writeValue(writer, ResultCache.getCache(3));
            return ;
        }
    }

    @Override
    public void destroy() {

    }
}
