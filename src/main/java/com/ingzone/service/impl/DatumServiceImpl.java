package com.ingzone.service.impl;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.DatumDAO;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.User;
import com.ingzone.model.vo.DatumVO;
import com.ingzone.service.DatumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by omsfuk on 17-5-11.
 */
@Service
@Transactional
public class DatumServiceImpl implements DatumService {

    @Autowired
    private DatumDAO datumDAO;

    @Autowired
    private UserDAO userDAO;

    @Override
    public Result getDatum(Page page) {
        Integer count = datumDAO.getDatumCount();
        List<Datum> datumList = datumDAO.getDatum(page);
        return ResultCache.getDataOk(new DatumVO(count, datumList));
    }

    @Override
    public Result insertDatum(Datum datum, Integer userid) {
        User user = userDAO.getUserById(userid);
        datumDAO.insertDatum(datum);
        return ResultCache.getCache(1);
    }

    @Override
    public Result deleteDatum(int id, Integer userid) {
        Datum datum = datumDAO.getDatumById(id);
        if(datum == null) {
            return ResultCache.getCache(0);
        }
        User dataOwner = userDAO.getUserByName(datum.getDataPublish());
        User user = userDAO.getUserById(userid);
        if("admin".equals(user.getRole())) {
            if(datumDAO.deleteDatum(id) != 1) {
                return ResultCache.getCache(0);
            }
        } else if("miniAdmin".equals(user.getRole())) {
            if ("member".equals(dataOwner.getRole())) {
                if (datumDAO.deleteDatum(id) != 1) {
                    return ResultCache.getCache(0);
                }
            }
        } else {
            if(dataOwner.getName().equals(datum.getDataPublish())) {
                if (datumDAO.deleteDatum(id) != 1) {
                    return ResultCache.getCache(0);
                }
            }
        }

        return ResultCache.getCache(0);
    }

    @Override
    public Result updateDatum(int id, String url) {
//        Datum datum = datumDAO.getDatumById(id);
//        if(datum == null) {
//            return ResultCache.getCache(0);
//        }
//        User dataOwner = userDAO.getUserByName(datum.getDataPublish());
//        User user = userDAO.getUserById(userid);
//        if("admin".equals(user.getRole())) {
//            if(datumDAO.deleteDatum(id) != 1) {
//                return ResultCache.getCache(0);
//            }
//        } else if("miniAdmin".equals(user.getRole())) {
//            if ("member".equals(dataOwner.getRole())) {
//                if (datumDAO.deleteDatum(id) != 1) {
//                    return ResultCache.getCache(0);
//                }
//            }
//        } else {
//            if(dataOwner.getName().equals(datum.getDataPublish())) {
//                if (datumDAO.deleteDatum(id) != 1) {
//                    return ResultCache.getCache(0);
//                }
//            }
//        }

        return ResultCache.getCache(0);
    }
}
