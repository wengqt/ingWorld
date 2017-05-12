package com.ingzone.util;

import com.ingzone.model.dto.User;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by omsfuk on 17-5-12.
 */
public class AuthPrivilegeUtil {

    private static Map<String, Integer> map = new HashMap<>();

    static {
        map.put("admin", 0);
        map.put("miniAdmin", 1);
        map.put("member", 2);
    }

    public static boolean permitAccess(String requireRole, String currentRole, Integer ownerId, Integer currentUserId) {
        // 防止调用时传错参数
        if(requireRole == null || currentRole == null) {
           return false;
        }
        Integer requiredRank = map.get(requireRole);
        Integer currentRank = map.get(currentRole);
        if(requiredRank < currentRank) {
            return false;
        }

        if(requiredRank == 2 && !ownerId.equals(currentUserId)) {
            return false;
        }

        return true;
    }

}
