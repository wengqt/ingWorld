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