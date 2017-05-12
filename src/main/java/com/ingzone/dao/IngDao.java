package com.ingzone.dao;

import com.ingzone.model.dto.IngDTO;
import com.ingzone.model.vo.IngVO;
import org.springframework.stereotype.Repository;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
@Repository
public interface IngDao {

    IngVO select();
    int update(IngDTO ingDTO);
    int add(IngDTO ingDTO);

}