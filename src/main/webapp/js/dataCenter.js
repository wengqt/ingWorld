/**
 * Created by zhou on 2017/7/7.
 */
var selectedPage =document.getElementsByClassName("selectedPage");
var tr =document.getElementsByTagName("tr");
var upLoad=document.getElementById("upLoad");
var cancelSubmit=document.getElementById("cancelSubmit");
var submitData=document.getElementById("submitData");
var submitDiv=document.getElementById("submitDiv");
var submitInfo=document.getElementsByClassName("submitInfo");

var totalPage=0;

console.log(selectedPage);
console.log(tr);
var requestInfo={
    page:1,
    rows:9
}
var Info={
    title:"",
    url:""
}
function pageControl() {
    if(selectedPage.length>=totalPage){
        console.log(selectedPage.length);
        console.log(totalPage)
        document.getElementById("nextPage").style.display="none";
    }
    for(var i=0;i<selectedPage.length;i++){
        (function (e) {
            selectedPage[e].onclick=function () {
                console.log(selectedPage[e].innerHTML);
                requestInfo.page=selectedPage[e].innerHTML;
                getDatum();
            }
        })(i)
    }
    document.getElementById("lastPage").onclick=function () {//上一页
        document.getElementById("nextPage").style.display="block";
        if(selectedPage[0].innerHTML<=selectedPage.length){
            console.log("不足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML=i+1;
            }
            document.getElementById("lastPage").style.display="none";
        }else {
            console.log("足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML-=selectedPage.length;
            }
            if(selectedPage[0].innerHTML==1){
                document.getElementById("lastPage").style.display="none";
            }
        }

    }
    document.getElementById("nextPage").onclick=function () {//下一页
        document.getElementById("lastPage").style.display="block";
        if((parseFloat(selectedPage[selectedPage.length-1].innerHTML)+selectedPage.length*1)>totalPage) {
            console.log("不足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML=totalPage-selectedPage.length+i+1;
            }
            document.getElementById("nextPage").style.display="none";
        }else{
            console.log("足"+totalPage);
            for(var i=0;i<selectedPage.length;i++){
                selectedPage[i].innerHTML=parseFloat(selectedPage[i].innerHTML)+selectedPage.length;
            }
            if(selectedPage[selectedPage.length-1].innerHTML==totalPage){
                document.getElementById("nextPage").style.display="none";
            }
        }
    }

}

function getDatum() {
    $.ajax({
        url:API.getDatum,
        type:"GET",
        dataType:"json",
        data:requestInfo,
        success:function (data) {
            console.log(data);
            var json=data;
            document.getElementById("total").innerHTML='共'+Math.ceil(data.data.total/requestInfo.rows)+'页'+data.data.total+"条资料";
            totalPage=Math.ceil(data.data.total/requestInfo.rows);
            pageControl();

            if(requestInfo.page<Math.ceil(data.data.total/requestInfo.rows)){

                for(var i=0;i<requestInfo.rows;i++){
                    tr[i+1].innerHTML = "<tr><td><div class=\"square\"></div></td><td>"+json.data.data[i].title+"</td><td>"+json.data.data[i].publishTime+"</td><td>"+json.data.data[i].dataPublish+"</td><td>"+json.data.data[i].url+"</td></tr>";

                }

            }else {
                var lasthave=data.data.total - (requestInfo.page - 1) * requestInfo.rows;
                for (var i = 0; i < lasthave; i++) {
                    tr[i+1].innerHTML = "<tr><td><div class=\"square\"></div></td><td>"+json.data.data[i].title+"</td><td>"+json.data.data[i].publishTime+"</td><td>"+json.data.data[i].dataPublish+"</td><td>"+json.data.data[i].url+"</td></tr>";


                }
                for(var i=lasthave;i<requestInfo.rows;i++){
                    tr[i+1].innerHTML="";
                }

            }
        }
    })

}
getDatum();
upLoad.onclick=function () {
    submitDiv.style.display="block";
}
cancelSubmit.onclick=function () {
    submitDiv.style.display="none"
}


submitData.onclick=function () {
    if(submitInfo[0].value==""||submitInfo[1].value==""){
        alert("输入框内不能为空");
    }else {
        Info.title=submitInfo[0].value;
        Info.url=submitInfo[1].value;
        console.log(Info);
        $.ajax({
            url:API.uploadDatum,
            type:"POST",
            dataType:"json",
            data:Info,
            success:function (data) {
                console.log(data);
            }
        })
    }
}

