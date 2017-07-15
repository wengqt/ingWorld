/**
 * Created by zhou on 2017/6/13.
 */

$.ajax({
    url:API.introduce,
    type:"GET",
    dataType:"json",
    success:function (data) {
        var json=JSON.parse(data);
        document.getElementById("introduceContent").innerHTML=json;
    }
})