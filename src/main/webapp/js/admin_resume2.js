/**
 * Created by zhou on 2017/7/8.
 */
var changeResume=document.getElementById("changeResume");
var submitChange=document.getElementById("submitChange");
var input=document.getElementsByClassName("input");
var textarea=document.getElementsByClassName("inputtext")
$.ajax({
    url:API.getUserInfo,
    type:"GET",
    success:function (data) {

}
})

changeResume.onclick=function () {
    changeResume.style.display="none";
    submitChange.style.display="block";

}
submitChange.onclick=function () {
    changeResume.style.display="block";
    submitChange.style.display='none';
    $.ajax({
        url:API.modifyUserInfo,

    })
}