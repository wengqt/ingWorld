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
                            console.log(0);
                            message.innerHTML="关&nbsp;于&nbsp;我&nbsp;们";
                            message.style.color="#cf3130";
                            content.style.borderColor="#5e92c7";
                            login.style.color="#3870ac";
                            word.innerHTML="&nbsp;";
                            total.src="img/0.png";
                            break;
                        case 1:
                            console.log(1);
                            message.innerHTML="通&nbsp;&nbsp;&nbsp;&nbsp;知";
                            message.style.color="#fff";
                            content.style.borderColor="#fff";
                            login.style.color="#fff";
                            word.innerHTML="文字文字文字文字";
                            word.style.color="#fff";
                            total.src="img/1.png";
                            break;
                        case 2:
                            console.log(2);
                            message.innerHTML="资&nbsp;料&nbsp;共&nbsp;享";
                            message.style.color="#fff";
                            content.style.borderColor="#fff";
                            login.style.color="#fff";
                            word.innerHTML="文字文字文字文字";
                            word.style.color="#fff";
                            total.src="img/2.png";
                            break;
                        case 3:
                            console.log(3);
                            message.innerHTML="招&nbsp;聘&nbsp;信&nbsp;息";
                            message.style.color="#fff";
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

