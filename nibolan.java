package com.ingzone.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Created by 王镜鑫 on 17-4-26 下午6:58.
 */
public class Demo {
    public static void main(String[] args) {
        ArrayList<Integer> inputs = new ArrayList<>();
        Scanner in = new Scanner(System.in);
        String line = in.nextLine();
        if(line!=null&&!line.isEmpty()){
            int res = resovle(line.trim());
            System.out.println(String.valueOf(res));
        }
    }

    private static int resovle(String line) {
        int[] stack = new int[16];
        int index = -1;
        String[] a =  line.split(" ");
        for(int i=0;i<a.length;i++){
            if(a[i].matches("[0-9]+")){
                if(index+1<16)
                    stack[++index] = Integer.parseInt(a[i]);
            }else {
                if (a[i].equals("^")) {
                    if (index >= 0) {
                        stack[index]++;
                    }
                } else if (a[i].equals("+")) {
                    if (index >= 1) {
                        int aa = stack[index--];
                        int bb = stack[index--];
                        stack[++index] = aa + bb;
                    }
                } else if (a[i].equals("*")) {
                    if (index >= 1) {
                        int aa = stack[index--];
                        int bb = stack[index--];
                        stack[++index] = aa * bb;
                    }
                }
            }
        }
        return stack[index];
    }
}
