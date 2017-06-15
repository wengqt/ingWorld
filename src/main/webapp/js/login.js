/**
 * Created by zhou on 2017/6/14.
 */
var loginInfo={
    id:"id",
    password:"password"
}

function login() {

    loginInfo.id=document.getElementById("id").value;
    loginInfo.password=document.getElementById("password").value;

    $.ajax({
        url:API.login,
        type:'POST',
        data:loginInfo,
        dataType:'json',
        success:function (data) {
            console.log(data);
            if(data.status==200){
                alert("登录成功");
            }
        }
    });
}




