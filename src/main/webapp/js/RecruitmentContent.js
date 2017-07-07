

var addimg=document.getElementById("addimg");
var leftimg=document.getElementById("leftimg");
leftimg.onclick=function () {
    location.href="index.html?page3";
}
addimg.onchange=function() {
	var url = getFileURL(); 
  	var img= document.getElementById("imgPre"); 
  	img.src= url;
}
function getFileURL(){
	var url; 
	if (navigator.userAgent.indexOf("MSIE")>=1) { // IE 
		url = document.getElementById('addimg').value; 
	} else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox 
		url = window.URL.createObjectURL(document.getElementById('addimg').files.item(0)); 
	} else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome 
		url = window.URL.createObjectURL(document.getElementById('addimg').files.item(0)); 
	} 
	console.log(url);
return url; 
}

var postInfo={
	name:"String", //投递人
	group:"String",	//投递方向
	introduce:"String",	//自我介绍
	gender:"String",
	className:"String",
	major:"String",
	phone:"String",
	qq:"",
	email:"",
	birthDate:""
}
function postResume()
{
	postInfo.name=document.getElementsByTagName('input')[0].value;
	postInfo.group=document.getElementsByTagName('input')[5].value;
	postInfo.introduce=document.getElementsByTagName('textarea')[0].value;
	postInfo.gender=document.getElementsByTagName('input')[1].value;
	postInfo.className=document.getElementsByTagName('input')[4].value;
    postInfo.birthDate=document.getElementById('birthDate').value+' 00:00:00';
    postInfo.qq=document.getElementsByTagName('input')[6].value;
    postInfo.phone=document.getElementsByTagName('input')[8].value;
    postInfo.email=document.getElementsByTagName('input')[7].value;
    postInfo.major=document.getElementsByTagName('input')[3].value;
    if(postInfo.name==''||postInfo.group==''||postInfo.introduce==''||postInfo.gender==''||postInfo.className==''||postInfo.birthDate==' 00:00:00'||postInfo.qq==''||postInfo.phone==''||postInfo.email==''||postInfo.major==''){
    	alert("输入内容不能为空");
	}else {
        $.ajax({
            url: API.postResume,
            type: "POST",
            dataType: "json",
            data: postInfo,
            success: function (data) {
                console.log(data);
            }
        })
    }
}
