/**
 * Created by zhou on 2017/7/8.
 */
$.ajax({
    url:API.getUserInfo,
    type:"GET",
    success:function (data) {
        var json=JSON.parse(data);
        console.log(json);
}
})