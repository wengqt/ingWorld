package com.ingzone.util;

import com.ingzone.base.Result;
import com.ingzone.cache.ResultCache;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

/**
 * Created by omsfuk on 17-5-12.
 */
public class AuthPrivilegeUtil {

    private static Map<String, Integer> map = new HashMap<>();

    static {
        map.put("admin", 0);
        map.put("miniadmin", 1);
        map.put("member", 2);
    }

    private static boolean permitAccess(String requireRole, String currentRole, Integer ownerId, Integer currentUserId) {
        // 防止调用时传错参数
        if(requireRole == null || currentRole == null) {
           return false;
        }
        System.out.println(requireRole.toLowerCase());
        Integer requiredRank = map.get(requireRole.toLowerCase());
        Integer currentRank = map.get(currentRole.toLowerCase());
        if(requiredRank < currentRank) {
            return false;
        }

        if(requiredRank == currentRank && !ownerId.equals(currentUserId)) {
            return false;
        }

        return true;
    }

    public static Result operateWithPrivilege(Integer ownerid, Integer userid, String requiredRole, String currentRole, Supplier<Result> operate) {
        if(AuthPrivilegeUtil.permitAccess(requiredRole, currentRole, ownerid, userid)) {
            return operate.get();
        }
        return ResultCache.getCache(3);
    };

}
