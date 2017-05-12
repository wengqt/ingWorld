package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Group;

/**
 * Created by omsfuk on 17-5-10.
 */
public interface GroupService {

    Result getGroup();

    Result modifyGroup(Group group);
}
