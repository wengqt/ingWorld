/**
 * Created by zhou on 2017/7/8.
 */
var changeResume=document.getElementById("changeResume");
var submitChange=document.getElementById("submitChange");
var input=document.getElementsByClassName("input");
var longinput=document.getElementsByClassName("longinput");
var textarea=document.getElementsByClassName("inputtext")
var cancelChange=document.getElementById("cancelChange");
var personInfo={
    id:123,
    name:"lph",
    introduce:"string",
    group:"string",
    grade:"string",
    major:"string",
    blog:"string",
    phone:"1231456",
    mail:"sdu.esu.cn",
    date:"string",
    github:"string",
    qq:"1345679",
}
console.log(input);
$.ajax({
    url:API.getUserInfo,
    type:"GET",
    success:function (data) {
        var output = JSON.parse(data);
        input[0].value = output.name;
        textarea[0].value=output.introduce;
        switch (output.group){
            case 1:
                input[6].value ="后台";
                break;
            case 2:
                input[6].value ="前端";
                break;
            case 3:
                input[6].value ="安卓";
                break;
            case 4:
                input[6].value ="IOS";
                break;
            case 5:
                input[6].value ="游戏";
                break;
            case 6:
                input[6].value ="设计";
                break;
            default:
                input[6].value="输入有误"
        }

        input[5].value=output.grade;
        input[4].value=output.major;
        input[1].value=output.blog;
        input[3].value=output.phone;
        longinput[0].value=output.mail;
        input[2].value=output.date;
        longinput[1].value=output.github;
        input[7].value=output.qq;
    }
})

function firm() {
    //利用对话框返回的值 （true 或者 false）
    if (confirm("你确定提交修改吗？")) {


        changeResume.style.display="block";
        submitChange.style.display='none';
        for(var i=1;i<input.length;i++) {
            input[i].setAttribute('readonly','readonly');
            input[i].style.backgroundColor="#e4eff5";
            input[i].style.width="55%";
            input[i].style.border="none";

        }
        for(var i=0;i<longinput.length;i++){
            longinput[i].setAttribute('readonly','readonly');
            longinput[i].style.backgroundColor="#e4eff5";
            longinput[i].style.width="80%";
            longinput[i].style.border="none";

        }
        textarea[0].style.border="none";
        textarea[0].setAttribute('readonly','readonly');
        textarea[0].style.backgroundColor="#e4eff5";
        textarea[0].style.border="none";
        alert("你提交了修改");
        cancelChange.style.display="none";
        personInfo.grade=input[5].value;
        personInfo.major=input[4].value;
        personInfo.blog=input[1].value;
        personInfo.phone=input[3].value;
        personInfo.mail=longinput[0].value;
        personInfo.date=input[2].value;
        personInfo.github=longinput[1].value;
        personInfo.qq=input[7].value;
        switch (input[6].value){
            case "前端":
                personInfo.group=2;
                break;
            case "后台":
                personInfo.group=1;
                break;
            case "安卓":
                personInfo.group=3;
                break;
            case "IOS":
                personInfo.group=4;
                break;
            case "游戏":
                personInfo.group=5;
                break;
            case "设计":
                personInfo.group=6;
                break;
            default:
                personInfo.group=-1;
        }
        console.log(personInfo);
        $.ajax({
            url:API.modifyUserInfo,
            type:"POST",
            dataType:"JSON",
            data:personInfo,
            success:function (data) {
                console.log(data);
            }
        })
    } else {

    }

}
changeResume.onclick=function () {
    changeResume.style.display="none";
    submitChange.style.display="block";
    cancelChange.style.display="block";
    for(var i=1;i<input.length;i++) {
        input[i].removeAttribute('readonly');
        input[i].style.backgroundColor="#ffffff";
        input[i].style.width="54%";
        input[i].style.border="1px solid #85b3e2"
        input[i].style.borderRadius="3px";
    }
    for(var i=0;i<longinput.length;i++){
        longinput[i].removeAttribute('readonly');
        longinput[i].style.backgroundColor="#ffffff";
        longinput[i].style.width="80%";
        longinput[i].style.border="1px solid #85b3e2"
        longinput[i].style.borderRadius="3px";
    }
    textarea[0].style.border="1px solid #85b3e2";
    textarea[0].removeAttribute('readonly');
    textarea[0].style.backgroundColor="#ffffff";
    textarea[0].style.borderRadius="10px";

}
submitChange.onclick=function () {

    firm();
}
cancelChange.onclick=function () {
    cancelChange.style.display="none";
    changeResume.style.display="block";
    submitChange.style.display='none';
    for(var i=1;i<input.length;i++) {
        input[i].setAttribute('readonly','readonly');
        input[i].style.backgroundColor="#e4eff5";
        input[i].style.width="55%";
        input[i].style.border="none";

    }
    for(var i=0;i<longinput.length;i++){
        longinput[i].setAttribute('readonly','readonly');
        longinput[i].style.backgroundColor="#e4eff5";
        longinput[i].style.width="80%";
        longinput[i].style.border="none";

    }
    textarea[0].style.border="none";
    textarea[0].setAttribute('readonly','readonly');
    textarea[0].style.backgroundColor="#e4eff5";
    textarea[0].style.border="none";
}