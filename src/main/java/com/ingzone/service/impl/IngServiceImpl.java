package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.IngDao;
import com.ingzone.model.Ing;
import com.ingzone.service.IngService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
@Service("ingService")
public class IngServiceImpl implements IngService {

    @Autowired
    IngDao ingDao;

    @Override
    public Result getStudioIntro() {
        return ResultCache.getDataOk(ingDao.select());
    }

    @Override
    public Result modifyStudio(Ing ing) {
        System.out.println(ing);
        return ResultCache.getDataOk(ingDao.update(ing));
    }

}
