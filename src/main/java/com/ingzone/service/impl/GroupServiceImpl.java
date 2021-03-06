package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.GroupDAO;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.Group;
import com.ingzone.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by omsfuk on 17-5-10.
 */

@Service
public class GroupServiceImpl implements GroupService {

    @Autowired
    private GroupDAO groupDAO;

    @Autowired
    private UserDAO userDAO;

    @Override
    public Result getGroup(Integer groupId) {
        Group group = groupDAO.getGroupById(groupId);
        group.setMembers(userDAO.getUserByGroup(group.getId()));
        return ResultCache.getDataOk(group);
    }

    @Override
    public Result modifyGroup(Group group) {
        try {
            groupDAO.modifyGroup(group);
            return ResultCache.OK;
        }catch (Exception e){
            e.printStackTrace();
            return ResultCache.FAILURE;
        }
    }
}
