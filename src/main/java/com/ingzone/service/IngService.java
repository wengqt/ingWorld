package com.ingzone.service;

import com.ingzone.base.Result;
import com.ingzone.model.Ing;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
public interface IngService {

    Result getStudioIntro();
    Result modifyStudio(Ing ing);

}
