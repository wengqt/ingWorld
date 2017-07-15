/**
 * Created by zhou on 2017/7/8.
 */
var changeResume=document.getElementById("changeResume");
var submitChange=document.getElementById("submitChange");
var input=document.getElementsByClassName("input");
var textarea=document.getElementsByClassName("inputtext")
console.log(input);
$.ajax({
    url:API.getUserInfo,
    type:"GET",
    success:function (data) {
        var output = JSON.parse(data);
        input[0].value = output.name;
        textarea[0].value=output.introduce;

    }
})

function firm() {
    //利用对话框返回的值 （true 或者 false）
    if (confirm("你确定提交修改吗？")) {
        alert("你提交了修改");
    }
    else {

    }

}
changeResume.onclick=function () {
    changeResume.style.display="none";
    submitChange.style.display="block";
    for(var i=1;i<input.length;i++) {
        input[i].removeAttribute('readonly');
        input[i].style.backgroundColor="#ffffff";
        input[i].style.width="54%";
        input[i].style.border="1px solid #85b3e2"
        input[i].style.borderRadius="3px";
    }
    textarea[0].style.border="1px solid #85b3e2";
    textarea[0].removeAttribute('readonly');
    textarea[0].style.backgroundColor="#ffffff";
    textarea[0].style.borderRadius="10px";

}
submitChange.onclick=function () {
    changeResume.style.display="block";
    submitChange.style.display='none';
    for(var i=1;i<input.length;i++) {
        input[i].setAttribute('readonly','readonly');
        input[i].style.backgroundColor="#e4eff5";
        input[i].style.width="55%";
        input[i].style.border="none";

    }
    textarea[0].style.border="none";
    textarea[0].setAttribute('readonly','readonly');
    textarea[0].style.backgroundColor="#e4eff5";
    textarea[0].style.border="none";

    firm();
    $.ajax({
        url:API.modifyUserInfo,
        type:"POST",
    })
}