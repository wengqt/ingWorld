/**
 * Created by zhou on 2017/6/14.
 */
var login = document.getElementById("login");
var logindiv=document.getElementById("logindiv")
var closeForlogin = document.getElementById("closeForlogin");
var closeForchange=document.getElementById("closeForchange");
var loginSubmit=document.getElementById("loginSubmit");
var loginChange=document.getElementById("loginChange");
var userId=null;
var inputEmpty=document.getElementById("inputEmpty");
var inputError=document.getElementById("inputError");
var exit=document.getElementById("exit");
var changeId=document.getElementById("changeId");
var changePassword=document.getElementById("changePassword");
var submitChange=document.getElementById("submitChange");
var cancelChange=document.getElementById("cancelChange");
var loginInfo={
    id:"id",
    password:"password"
}
var passwordInfo={
    old:"",
    new:""
}
closeForlogin.onclick = function () {
    logindiv.style.display = "none";
}
closeForchange.onclick=function () {
    loginChange.style.display = "none";
}
changePassword.onclick=function () {
    document.getElementById('changePasswordDiv').style.display='block';
}

cancelChange.onclick=function () {
    document.getElementById('changePasswordDiv').style.display='none';
}
submitChange.onclick=function () {
    passwordInfo.old=document.getElementById("oldPassword").value;
    passwordInfo.new=document.getElementById("newPassword").value;
    console.log(passwordInfo);
    $.ajax({
        url:API.changePassword,
        type:'POST',
        data:passwordInfo,
        dataType:'JSON',
        success:function (data) {
            console.log(data);

        }
    })
}

loginSubmit.onclick=function() {
    console.log("ww");
    loginInfo.id=document.getElementById("id").value;
    loginInfo.password=document.getElementById("password").value;
    inputEmpty.style.display="none";
    inputError.style.display="none";
    if(loginInfo.id==""||loginInfo.password==""){
        inputEmpty.style.display="block";
    }



    $.ajax({
        url:API.login,
        type:'POST',
        data:loginInfo,
        dataType:'json',
        success:function (data) {
            console.log(data);
            if(data.status==200){
                alert("登录成功");
                document.getElementById("login").innerHTML='id:'+loginInfo.id+'已登录';
                $.cookie('loginState', 1, { expires: 7 });

                $.cookie('userId',loginInfo.id,{expires:7});
                logindiv.style.display="none";
                login.onclick=function () {
                    loginChange.style.display="block";
                }

            }else if(data.status==300){
                if(loginInfo.id!=""&&loginInfo.password!="") {
                    inputError.style.display = "block";
                }
            }
        }
    });
}
exit.onclick=function () {
    document.getElementById("login").innerHTML='登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
    loginChange.style.display = "none";
    login.onclick = function () {
        logindiv.style.display = "block";
    }
    $.cookie('loginState',0);
    $.removeCookie('userId');
}

changeId.onclick=function () {
    document.getElementById("login").innerHTML='登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
    loginChange.style.display = "none";
    logindiv.style.display = "block";
    $.cookie('loginState',0);
    $.removeCookie('userId');
}

if($.cookie('loginState')==0){
    document.getElementById("login").innerHTML='登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
    console.log("no login");
    login.onclick = function () {
        logindiv.style.display = "block";
    }
}else{
    document.getElementById("login").innerHTML='id:'+$.cookie('userId')+'已登录';
    console.log('login')
    login.onclick = function () {
        loginChange.style.display = "block";
    }
}