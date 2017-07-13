package com.ingzone.dao;

import com.ingzone.model.dto.Group;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by omsfuk on 17-5-10.
 */

@Repository
public interface GroupDAO {

    List<Group> getGroup();

    Group getGroupById(Integer id);

    void modifyGroup(Group group);
}
