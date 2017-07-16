package com.ingzone.dao;

import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by omsfuk on 17-5-11.
 */

@Repository
public interface DatumDAO {

    Integer getDatumCount();

    Integer updateDatum(Datum datum);

    Integer deleteDatum(int id);

    Integer insertDatum(Datum datum);

    Datum getDatumById(int id);


    List<Datum> getDatum(@Param("begin") int begin, @Param("rows") int rows);
}
