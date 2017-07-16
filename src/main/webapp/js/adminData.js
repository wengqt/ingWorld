/**
 * Created by zhou on 2017/7/7.
 */
var line=document.getElementsByClassName("content");
var deleteBtn=document.getElementsByClassName("deleteBtn");
var changeBtn=document.getElementsByClassName("changeBtn")
var upLoad=document.getElementById("upLoad");
var cancelSubmit=document.getElementById("cancelSubmit");
var submitData=document.getElementById("submitData");
var submitDiv=document.getElementById("submitDiv");
var submitInfo=document.getElementsByClassName("submitInfo");
var Info={
    title:"",
    url:""
}
var requestInfo={
    page:1,
    rows:9
}
console.log(line);
console.log(deleteBtn);

$.ajax({
    url:API.getDatum,
    type:"GET",
    dataType:"json",
    data:requestInfo,
    success:function (data) {



    }
})
upLoad.onclick=function () {
    submitDiv.style.display="block";
}
cancelSubmit.onclick=function () {
    submitDiv.style.display="none"
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

for(var i=0;i<deleteBtn.length;i++){
    (function (e) {
        deleteBtn[e].onclick=function () {
            // line[e].style.display="none";
            console.log("delelte"+e)



        }
    })(i)
}
for(var i=0;i<changeBtn.length;i++){
    (function (e) {
        changeBtn[e].onclick=function () {
            // line[e].style.display="none";
            console.log("change"+e)
        }
    })(i)
}

