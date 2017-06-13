

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
	mail:"String",	//个人邮箱
	phone:"String",	//个人电话
	qq:"String"	//个人QQ
}
function postResume()
{

console.log(postInfo);
postInfo.name=document.getElementsByTagName('input')[0].value;
postInfo.group=document.getElementsByTagName('input')[5].value;
postInfo.introduce=document.getElementsByTagName('textarea')[0].value;
console.log(postInfo);
    var xhr = new XMLHttpRequest();

    xhr.open("POST", API.postResume, true);

    xhr.onreadystatechange = function(){
        var XMLHttpReq = xhr;
        if (XMLHttpReq.readyState == 4) {
            if (XMLHttpReq.status == 200) {

            }
        }
    };
    xhr.send(postInfo);
}