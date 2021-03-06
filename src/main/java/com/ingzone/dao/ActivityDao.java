package com.ingzone.dao;

import com.ingzone.model.dto.ActivityDTO;
import com.ingzone.model.vo.ActivityVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityDao {

    int add(ActivityDTO activityDTO);

    int update(ActivityDTO activityDTO);

    int delete(int id);

    List<ActivityDTO> select(@Param("begin") int begin, @Param("rows") int rows);

    int getActivityCount();

}