package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;

/**
 * Created by omsfuk on 17-5-11.
 */
public interface DatumService {

    Result getDatum(Page page);

    Result insertDatum(Datum datum, Integer userid);

    Result deleteDatum(int id, Integer userid);

    Result updateDatum(int id, String url);

}
