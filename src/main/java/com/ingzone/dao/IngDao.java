package com.ingzone.dao;

import com.ingzone.model.Ing;
import org.springframework.stereotype.Repository;

/**
 * Created by Ji Shapkang on 2017/5/9.
 */
@Repository
public interface IngDao {

    Ing select();
    int update(Ing ing);

}
