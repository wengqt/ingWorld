package com.ingzone.service.impl;

import com.ingzone.dao.IngDao;
import com.ingzone.model.dto.IngDTO;
import com.ingzone.model.vo.IngVO;
import com.ingzone.service.IngService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
@Service("ingService")
@Transactional
public class IngServiceImpl implements IngService {

    @Autowired
    IngDao ingDao;

    @Override
    public IngVO getStudioIntro() {
        return ingDao.select();
    }

    @Override
    public boolean modifyStudio(IngDTO ingDTO) {
        if (ingDao.update(ingDTO)!=0) {
            return true;
        }
        else {
            if (ingDao.add(ingDTO)!=0){
                return true;
            }else{
                return false;
            }
        }
    }

}
