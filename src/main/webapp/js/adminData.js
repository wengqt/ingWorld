/**
 * Created by zhou on 2017/7/7.
 */
var line=document.getElementsByClassName("content");
var deleteBtn=document.getElementsByClassName("deleteBtn");
var changeBtn=document.getElementsByClassName("changeBtn");
var upLoad=document.getElementById("upLoad");
var cancelSubmit=document.getElementById("cancelSubmit");
var submitData=document.getElementById("submitData");
var submitDiv=document.getElementById("submitDiv");
var submitInfo=document.getElementsByClassName("submitInfo");
var total=document.getElementById("total");
var selectedPage=document.getElementsByClassName("selectedPage");
var changeDiv=document.getElementById("changeDiv");
var contentId=[];
var Info={
    title:"",
    url:""
}
var deleteInfo={
    id:""
}
var changeInfo={
    id:"",
    url:""
}
var requestInfo={
    page:1,
    rows:9
}
console.log(line);

function getDatum() {
    $.ajax({
        url:API.getDatum,
        type:"GET",
        dataType:"json",
        data:requestInfo,
        success:function (data) {
            console.log(data)
            total.innerHTML="共"+Math.ceil(data.data.total/requestInfo.rows)+"页"+data.data.total+"条资料";
            if(requestInfo.page<Math.ceil(data.data.total/requestInfo.rows)){

                for(var i=0;i<requestInfo.rows;i++){
                    line[i].innerHTML="<tr class=\"content\"><td><div class=\"square\"></div></td><td>"+data.data.data[i].title+"</td><td>"+data.data.data[i].publishTime+"</td><td>"+data.data.data[i].dataPublish+"</td><td>"+data.data.data[i].url+"</td><td class=\"colfive\"><input class=\"changeBtn\" type=\"button\" value=\"修改\"></td><td class=\"colsix\"><input class=\"deleteBtn\" type=\"button\" value=\"删除\"></td></tr>"
                    contentId[i]=data.data.data[i].id;
                }

            }else {
                var lasthave=data.data.total - (requestInfo.page - 1) * requestInfo.rows;

                for (var i = 0; i < lasthave; i++) {
                    line[i].innerHTML = "<tr class=\"content\"><td><div class=\"square\"></div></td><td>" + data.data.data[i].title + "</td><td>" + data.data.data[i].publishTime + "</td><td>" + data.data.data[i].dataPublish + "</td><td>" + data.data.data[i].url + "</td><td class=\"colfive\"><input class=\"changeBtn\" type=\"button\" value=\"修改\"></td><td class=\"colsix\"><input class=\"deleteBtn\" type=\"button\" value=\"删除\"></td></tr>"
                    contentId[i] = data.data.data[i].id;

                }
                for(var i=lasthave;i<requestInfo.rows;i++){
                    line[i].innerHTML="";
                }

            }
            for(var i=0;i<deleteBtn.length;i++){
                (function (e) {
                    deleteBtn[e].onclick=function () {
                        deleteInfo.id=contentId[e];
                        console.log(deleteInfo.id);
                        $.ajax({
                            url:API.deleteDatum,
                            type:"GET",
                            dataType:"json",
                            data:deleteInfo,
                            success:function (data) {
                                console.log(data);
                                alert("删除成功");
                            }
                        })
                        console.log("delelte"+e);

                        getDatum();
                    }
                })(i)
            }
            for(var i=0;i<changeBtn.length;i++){
                (function (e) {
                    changeBtn[e].onclick=function () {
                        // line[e].style.display="none";
                        console.log("change"+e);
                        changeDiv.style.display="block";
                        document.getElementById("submitChangeData").onclick=function () {

                        }
                        getDatum();
                    }
                })(i)
            }

        }
    })
}
getDatum();
upLoad.onclick=function () {
    submitDiv.style.display="block";
}
cancelSubmit.onclick=function () {
    submitDiv.style.display="none"
}
document.getElementById("cancelChangeData").onclick=function () {
    changeDiv.style.display="none";
}
submitData.onclick=function () {
   if(submitInfo[0].value==""||submitInfo[1].value==""){
       alert("输入框内不能为空");
   }else {
        Info.title=submitInfo[0].value;
        Info.url=submitInfo[1].value;
        console.log(Info);
       $.ajax({
           url:API.uploadDatum,
           type:"POST",
           dataType:"json",
           data:Info,
           success:function (data) {
               console.log(data);
           }
       })
   }
}


console.log(selectedPage);
for(var i=0;i<selectedPage.length;i++){
    (function (e) {
        selectedPage[e].onclick=function () {
            console.log(selectedPage[e].innerHTML);
            requestInfo.page=selectedPage[e].innerHTML;
            getDatum();
        }
    })(i)

}
