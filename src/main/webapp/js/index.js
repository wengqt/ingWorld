var leftUp =document.getElementById("leftUp");
var leftBottom =document.getElementById("leftBottom");
var rightUp =document.getElementById("rightUp");
var rightBottom =document.getElementById("rightBottom");
var total =document.getElementById("total");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var all=document.getElementById("all");
var message=document.getElementById("message");
var content=document.getElementById("content");
var login=document.getElementById("login");
var mainlink=document.getElementById("mainlink");
var clickState=0;
var clicktarget=[one,two,three,four];
clicktarget[0].style.backgroundColor="#747676";
var lastclick=0;
var word=document.getElementById('word');
var offsettop=document.documentElement.clientHeight;
content.style.marginTop=offsettop/2-76+'px';
word.style.marginTop=offsettop/2-106+'px';
window.onresize=function (){
    var word=document.getElementById('word');
    var offsettop=document.documentElement.clientHeight;
    content.style.marginTop=offsettop/2-76+'px';
    word.style.marginTop=offsettop/2-106+'px';
}


function reset(){
    rightUp.className="rightUp";
    leftUp.className="leftUp";
    clickState=0;
}


(all.onclick=function(){

    for(var i=0;i<4;i++){
        (function(i){
            clicktarget[i].onclick=function(){
                if(clickState==0){
                    clickState=1;

                    var urlLeftAfter="img/"+i+"_1.png";
                    var urlRightAfter="img/"+i+"_2.png";
                    // function backwardSrc(){

                    // }
                    // function forwardSrc(){

                    // }
                    if(lastclick<i){
                        console.log("backward");
                        rightBottom.src=`${urlRightAfter}`;
                        rightUp.className="backwardRotateFirst rightUp";

                        setTimeout(function backwardSrc(){
                            console.log("succes");
                            rightUp.src=urlRightAfter;
                            leftUp.src=`${urlLeftAfter}`;
                        },900);
                        leftUp.className="backwardRotateSecond leftUp";

                        setTimeout(function test(){
                            leftBottom.src=`${urlLeftAfter}`;
                        },1800);
                        setTimeout("reset()",1800);
                    }
                    else if(lastclick>i){

                        console.log("forward");
                        leftBottom.src=`${urlLeftAfter}`;
                        leftUp.className="forwardRotateFirst leftUp";
                        setTimeout(function forwardSrc(){
                            leftUp.src=`${urlLeftAfter}`;
                            rightUp.src=`${urlRightAfter}`;
                        },900);
                        rightUp.className="forwardRotateSecond rightUp";
                        setTimeout(function test(){
                            rightBottom.src=`${urlRightAfter}`;
                        },1800);
                        setTimeout("reset()",1800);
                    }else{
                        reset();
                    }
                    lastclick=i;
                    clicktarget[(i+1)%4].style.backgroundColor="";
                    clicktarget[(i+2)%4].style.backgroundColor="";
                    clicktarget[(i+3)%4].style.backgroundColor="";
                    clicktarget[(i+4)%4].style.backgroundColor="#747676";
                    switch(i){
                        case 0:

                            mainlink.innerHTML="关&nbsp;于&nbsp;我&nbsp;们";
                            mainlink.style.color="#cf3130";
                            content.style.borderColor="#5e92c7";
                            mainlink.href="introduce.html";
                            login.style.color="#3870ac";
                            word.innerHTML="&nbsp;";
                            total.src="img/0.png";
                            break;
                        case 1:

                            mainlink.innerHTML="通&nbsp;&nbsp;&nbsp;&nbsp;知";
                            mainlink.style.color="#fff";
                            content.style.borderColor="#fff";
                            mainlink.href="inform.html"
                            login.style.color="#fff";
                            word.innerHTML="文字文字文字文字";
                            word.style.color="#fff";
                            total.src="img/1.png";
                            break;
                        case 2:

                            mainlink.innerHTML="资&nbsp;料&nbsp;共&nbsp;享";
                            mainlink.style.color="#fff";
                            mainlink.href="data_center.html";
                            content.style.borderColor="#fff";
                            login.style.color="#fff";
                            word.innerHTML="文字文字文字文字";
                            word.style.color="#fff";
                            total.src="img/2.png";
                            break;
                        case 3:

                            mainlink.innerHTML="招&nbsp;聘&nbsp;信&nbsp;息";
                            mainlink.style.color="#fff";
                            mainlink.href="resume.html";
                            content.style.borderColor="#fff";
                            login.style.color="#fff";
                            word.innerHTML="文字文字文字文字";
                            word.style.color="#010101";
                            total.src="img/3.png";
                            break;
                    }
                }}
        })(i)
    }
})()

var param=window.location.search;
if(/page/.test(param)) {
    var num = param.substr(5, 1);

    clicktarget[(parseInt(num)+1)%4].style.backgroundColor="";
    clicktarget[(parseInt(num)+2)%4].style.backgroundColor="";
    clicktarget[(parseInt(num)+3)%4].style.backgroundColor="";
    clicktarget[(parseInt(num)+4)%4].style.backgroundColor="#747676";
    switch(parseInt(num)){
        case 0:
            mainlink.innerHTML="关&nbsp;于&nbsp;我&nbsp;们";
            mainlink.style.color="#cf3130";
            content.style.borderColor="#5e92c7";
            mainlink.href="introduce.html";
            login.style.color="#3870ac";
            word.innerHTML="&nbsp;";
            total.src="img/0.png";
            leftUp.src="img/0_1.png";
            leftBottom.src="img/0_1.png";
            rightUp.src="img/0_2.png";
            rightBottom.src="img/0_2.png";
            break;
        case 1:
            mainlink.innerHTML="通&nbsp;&nbsp;&nbsp;&nbsp;知";
            mainlink.style.color="#fff";
            content.style.borderColor="#fff";
            mainlink.href="inform.html"
            login.style.color="#fff";
            word.innerHTML="文字文字文字文字";
            word.style.color="#fff";
            total.src="img/1.png";
            leftUp.src="img/1_1.png";
            leftBottom.src="img/1_1.png";
            rightUp.src="img/1_2.png";
            rightBottom.src="img/1_2.png";
            break;
        case 2:
            mainlink.innerHTML="资&nbsp;料&nbsp;共&nbsp;享";
            mainlink.style.color="#fff";
            mainlink.href="data_center.html";
            content.style.borderColor="#fff";
            login.style.color="#fff";
            word.innerHTML="文字文字文字文字";
            word.style.color="#fff";
            total.src="img/2.png";
            leftUp.src="img/2_1.png";
            leftBottom.src="img/2_1.png";
            rightUp.src="img/2_2.png";
            rightBottom.src="img/2_2.png";
            break;
        case 3:
            mainlink.innerHTML="招&nbsp;聘&nbsp;信&nbsp;息";
            mainlink.style.color="#fff";
            mainlink.href="resume.html";
            content.style.borderColor="#fff";
            login.style.color="#fff";
            word.innerHTML="文字文字文字文字";
            word.style.color="#010101";
            total.src="img/3.png";
            leftUp.src="img/3_1.png";
            leftBottom.src="img/3_1.png";
            rightUp.src="img/3_2.png";
            rightBottom.src="img/3_2.png";
            break;
    }
}



