/**
 * Created by zhou on 2017/7/7.
 */
var line=document.getElementsByClassName("content");
var deleteBtn=document.getElementsByClassName("deletebtn");
var tbody=document.getElementsByTagName("tbody");
var upLoad=document.getElementById("upLoad");
var cancelSubmit=document.getElementById("cancelSubmit");
var submitData=document.getElementById("submitData");
var submitDiv=document.getElementById("submitDiv");
var submitInfo=document.getElementsByClassName("submitInfo");
var Info={
    title:"",
    url:""
}
console.log(line);
console.log(deleteBtn);
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
        console.log(Info)
       $.ajax({
           url:API.deleteNotice
       })
   }
}

for(var i=0;i<deleteBtn.length;i++){
    (function (e) {
        deleteBtn[e].onclick=function () {
            // line[e].style.display="none";




        }
    })(i)

}
