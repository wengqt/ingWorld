package com.ingzone.service;

import com.ingzone.model.dto.IngDTO;
import com.ingzone.model.vo.IngVO;

/**
 * Created by Ji Shaokang on 2017/5/9.
 */
public interface IngService {

    IngVO getStudioIntro();
    boolean modifyStudio(IngDTO ingDTO);

}
