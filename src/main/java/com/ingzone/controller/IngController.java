package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.model.Ing;
import com.ingzone.service.IngService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
@RestController
public class IngController {

    @Autowired
    IngService ingService;

    @RequestMapping(value = "/api/plain/getStudioIntro",method = RequestMethod.GET)
    public Result getStudioIntro() {
        return ingService.getStudioIntro();
    }

    @RequestMapping(value = "/api/admin/modifyStudio",method = RequestMethod.POST)
    public Result modifyStudio(Ing ing) {
        return ingService.modifyStudio(ing);
    }

}
