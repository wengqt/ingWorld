package com.ingzone.service.impl;

import com.ingzone.base.NeedPrivilegeOperate;
import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;
import com.ingzone.dao.DatumDAO;
import com.ingzone.dao.UserDAO;
import com.ingzone.model.dto.Datum;
import com.ingzone.model.dto.Page;
import com.ingzone.model.dto.User;
import com.ingzone.model.vo.DatumVO;
import com.ingzone.service.DatumService;
import com.ingzone.util.AuthPrivilegeUtil;
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
        datum.setDataPublish(user.getName());
        datumDAO.insertDatum(datum);
        return ResultCache.getCache(1);
    }

    @Override
    public Result deleteDatum(int id, Integer userid, String currentRole) {
        Datum datum = datumDAO.getDatumById(id);
        if(datum == null) {
            return ResultCache.getCache(0);
        }
        User dataOwner = userDAO.getUserByName(datum.getDataPublish());

        return AuthPrivilegeUtil.operateWithPrivilege(dataOwner.getId(), userid, dataOwner.getRole(), currentRole,
                () -> datumDAO.deleteDatum(id) == 1 ? ResultCache.OK : ResultCache.FAILURE);
    }

    @Override
    public Result updateDatum(Datum datum, Integer userid, String currentRole) {
        // 当前存储的资料，用来判断是否是拥有者
        Datum ownerDatum = datumDAO.getDatumById(datum.getId());
        if(ownerDatum == null) {
            return ResultCache.FAILURE;
        }
        User dataOwner = userDAO.getUserByName(ownerDatum.getDataPublish());

        return AuthPrivilegeUtil.operateWithPrivilege(dataOwner.getId(), userid, dataOwner.getRole(), currentRole,
                () -> datumDAO.updateDatum(datum) == 1 ? ResultCache.OK : ResultCache.FAILURE);
    }

}
