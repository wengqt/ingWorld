package com.ingzone.dao;

import com.ingzone.model.dto.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by omsfuk on 17-5-10.
 */

@Repository
public interface UserDAO {

    List<User> getUserByGroup(int group);

    User getUserById(int id);

    User getUserByName(String name);

    void modifyUserInfo(User user);

    List<String> getALLUserEmail();

    void changePassword(@Param("id") int id,@Param("newpw") String newpw);

}
