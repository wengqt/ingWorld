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
var totalPage=0;
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
function pageControl() {
    if(selectedPage.length>=totalPage){
        console.log(selectedPage.length);
        console.log(totalPage)
        document.getElementById("nextPage").style.display="none";
    }
    for(var i=0;i<selectedPage.length;i++){
        (function (e) {
            selectedPage[e].onclick=function () {
                console.log(selectedPage[e].innerHTML);
                requestInfo.page=selectedPage[e].innerHTML;
                getDatum();
            }
        })(i)
    }
    document.getElementById("lastPage").onclick=function () {//上一页
        document.getElementById("nextPage").style.display="block";
        if(selectedPage[0].innerHTML<=selectedPage.length){
            console.log("不足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML=i+1;
            }
            document.getElementById("lastPage").style.display="none";
        }else {
            console.log("足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML-=selectedPage.length;
            }
            if(selectedPage[0].innerHTML==1){
                document.getElementById("lastPage").style.display="none";
            }
        }

    }
    document.getElementById("nextPage").onclick=function () {//下一页
        document.getElementById("lastPage").style.display="block";
        if((parseFloat(selectedPage[selectedPage.length-1].innerHTML)+selectedPage.length*1)>totalPage) {
            console.log("不足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML=totalPage-selectedPage.length+i+1;
            }
            document.getElementById("nextPage").style.display="none";
        }else{
            console.log("足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML=parseFloat(selectedPage[i].innerHTML)+selectedPage.length;
            }
            if(selectedPage[selectedPage.length-1].innerHTML==totalPage){
                document.getElementById("nextPage").style.display="none";
            }
        }
    }

}
function getDatum() {
    $.ajax({
        url:API.getDatum,
        type:"GET",
        dataType:"json",
        data:requestInfo,
        success:function (data) {
            console.log(data)
            totalPage=Math.ceil(data.data.total/requestInfo.rows);
            pageControl();
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
                        if (confirm("你确定删除吗？")) {
                            deleteInfo.id=contentId[e];

                            $.ajax({
                                url:API.deleteDatum,
                                type:"GET",
                                dataType:"json",
                                data:deleteInfo,
                                success:function (data) {
                                    console.log(data);
                                    if(data.status==200){
                                        alert("删除成功");
                                        getDatum();
                                    }else if(data.status==300){
                                        alert("删除失败");
                                    }else if(data.status==400){
                                        alert("权限不足");
                                    }

                                }
                            })
                            console.log("delelte"+e);
                        }
                        else {

                        }

                    }
                })(i)
            }
            for(var i=0;i<changeBtn.length;i++){
                (function (e) {
                    changeBtn[e].onclick=function () {
                        // line[e].style.display="none";
                        console.log("change"+e);
                        document.getElementById("oldURL").value=line[e].getElementsByTagName("td")[4].innerHTML;
                        changeDiv.style.display="block";

                        document.getElementById("submitChangeData").onclick=function () {
                            if(document.getElementById("submitURL").value==""||document.getElementById("submitURL").value==document.getElementById("oldURL").value){
                                alert("输入网址不能为空或重复")
                            }else {
                                changeInfo.url = document.getElementById("submitURL").value;
                                changeInfo.id = contentId[e];
                                console.log(changeInfo);

                                $.ajax({
                                    url:API.modifyDatum,
                                    type:"POST",
                                    dataType:"json",
                                    data:changeInfo,
                                    success:function (data) {
                                        console.log(data);
                                        if(data.status==200){
                                            getDatum();
                                            alert("修改成功");
                                        }else if(data.status==300){
                                            alert("删除失败");
                                        }else if(data.status==400){
                                            alert("权限不足");
                                        }

                                    }
                                })

                                changeDiv.style.display="none";

                            }
                            changeDiv.style.display="none";
                        }
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




