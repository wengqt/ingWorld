package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;

/**
 * Created by 王镜鑫 on 17-4-23 下午9:52.
 */
@RestController
public class DemoController {
    @Autowired
    DemoService demoService;
    @RequestMapping(value = "/test",method = RequestMethod.POST)
    public Result test(MultipartFile file){
            System.out.println(file);
        return demoService.test();
    }
}
