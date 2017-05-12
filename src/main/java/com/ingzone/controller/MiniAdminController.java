package com.ingzone.controller;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Group;
import com.ingzone.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by gzq on 17-5-10.
 */
@RestController
@RequestMapping("api/miniAdmin")
public class MiniAdminController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(value = "/modifyGroup", method = RequestMethod.POST)
    public Result modifyGroup(Group group) {
        return groupService.modifyGroup(group);
    }

}
