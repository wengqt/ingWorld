package com.ingzone.util;

import java.text.DecimalFormat;
import java.util.Scanner;

public class Main {
    static class Data{
        public String color;
        public int x;
        public int y;
        public int z;
    }
    public static void main(String[] args) {
        Data[] data = new Data[100];
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        for(int i=0;i<n;i++){
            Data d = new Data();
            d.color = scanner.next();
            d.x = scanner.nextInt();
            d.y = scanner.nextInt();
            d.z = scanner.nextInt();
            data[i] = d;
        }
        double max = -1;
        for(int i=0;i<n;i++)
        for(int j=i+1;j<n;j++)
        for(int k=j+1;k<n;k++){
            Data d1 = data[i];
            Data d2 = data[j];
            Data d3 = data[k];
            if((d1.color.equals(d2.color)&&d2.color.equals(d3.color))||(!d1.color.equals(d2.color)&&!d1.color.equals(d3.color)&&!d2.color.equals(d3.color))){
                double l1 = getLength(d1,d2);
                double l2 = getLength(d1,d3);
                double l3 = getLength(d2,d3);
                double p=(l1+l2+l3)/2;
                double s=Math.sqrt(p*(p-l1)*(p-l2)*(p-l3));
                max = Math.max(max,s);
            }
        }
        DecimalFormat df = new DecimalFormat("#.00000");
        System.out.println(df.format(max));
    }

    private static double getLength(Data d1, Data d2) {
        return Math.sqrt(Math.pow(Math.abs(d1.x-d2.x),2)+Math.pow(Math.abs(d1.y-d2.y),2)+Math.pow(Math.abs(d1.z-d2.z),2));
    }
}
