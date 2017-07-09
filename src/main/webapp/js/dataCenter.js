/**
 * Created by zhou on 2017/7/7.
 */
var option =document.getElementsByClassName("option");
var tr =document.getElementsByTagName("tr");
console.log(option);
console.log(tr);
var requestInfo={
    page:1,
    rows:9
}

for(var i=0;i<requestInfo.rows;i++){
    (function (e) {
        option[e].onclick=function () {
            var pageNum=e+1;
            requestInfo.page=pageNum;
            console.log(pageNum);
            $.ajax({
                url:API.getDatum,
                type:"GET",
                dataType:"json",
                data:requestInfo,
                success:function (data) {
                    // console.log(data);
                    // var json=eval('('+data+')');

                    // document.getElementById("totalPage").innerHTML='共'+json.total+'页';
                    for(var index=0;index<requestInfo.rows;index++) {
                        tr[index+1].innerHTML = "<tr><td><div class=\"square\"></div></td><td>"+json.data[index].title+"</td><td>"+json.data[index].publishTime+"</td><td>"+json.data[index].dataPublish+"</td><td>"+json.data[index].url+"</td></tr>";
                    }
                }
            })
        }
    })(i)

}
$.ajax({
    url:API.getDatum,
    type:"GET",
    dataType:"json",
    data:requestInfo,
    success:function (data) {
        console.log(data);
        // var json=eval('('+data+')');

        // document.getElementById("totalPage").innerHTML='共'+json.total+'页';
        for(var index=0;index<requestInfo.rows;index++) {
            tr[index+1].innerHTML = "<tr><td><div class=\"square\"></div></td><td>"+json.data[index].title+"</td><td>"+json.data[index].publishTime+"</td><td>"+json.data[index].dataPublish+"</td><td>"+json.data[index].url+"</td></tr>";
        }
    }
})

