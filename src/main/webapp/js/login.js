/**
 * Created by zhou on 2017/6/14.
 */
var login = document.getElementById("login");
var logindiv=document.getElementById("logindiv")
var closeForlogin = document.getElementById("closeForlogin");
var closeForchange=document.getElementById("closeForchange");
var loginSubmit=document.getElementById("loginSubmit");
var loginChange=document.getElementById("loginChange");
var loginState=0;
var inputEmpty=document.getElementById("inputEmpty");
var inputError=document.getElementById("inputError");
var exit=document.getElementById("exit");
var changeId=document.getElementById("changeId");
var loginInfo={
    id:"id",
    password:"password"
}
closeForlogin.onclick = function () {
    logindiv.style.display = "none";
}
closeForchange.onclick=function () {
    loginChange.style.display = "none";
}
// document.cookie="bb";
login.onclick = function () {
    logindiv.style.display = "block";
}



loginSubmit.onclick=function() {
    console.log("ww")
    loginInfo.id=document.getElementById("id").value;
    loginInfo.password=document.getElementById("password").value;
    inputEmpty.style.display="none";
    inputError.style.display="none";
    if(loginInfo.id==""||loginInfo.password==""){
        inputEmpty.style.display="block";
        console.log(1);
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
                // document.cookie = 'notloginin;expires=Thu, 01-Jan-1970 00:00:01 GMT'; 'path=/subdirectory; '
                // var date =new Date();
                // // document.cookie = 'loginSuccess;'+'expires='+date+60+';'+'path=/;';
                // console.log(date);
                loginState=1;
                console.log("loginState="+loginState);
                document.getElementById("login").innerHTML='id:'+loginInfo.id+'已登录';
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

}

changeId.onclick=function () {
    document.getElementById("login").innerHTML='登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
    loginChange.style.display = "none";
    logindiv.style.display = "block";

}