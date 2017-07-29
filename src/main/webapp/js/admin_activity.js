/**
 * Created by 延松松松松 on 2017/7/19.
 */

var PropageInt = 1;
var ActpageInt = 1;
var PropageMax,ActpageMax,ID;
var actName_0,actIntr_0,showDate_0,showTime_0,showYear_0,showMonth_0,showDay_0,showHour_0,showMin_0,groupDuty_0 = [],groupShow_0 = [],dataSource_0;


//点击活动菱形的时候 显示活动详细介绍
function showActDetailIntro(IntroTitle,IntroContent) {

    document.getElementById("admin_mainbody_act").classList.remove("display");
    document.getElementById("admin_mainbody_act").classList.add("display--none");
    document.getElementById("ActIntroTitle").innerHTML = IntroTitle;
    // console.log(IntroTitle,IntroContent);
    document.getElementById("ActIntoContent").innerHTML = IntroContent;
    document.getElementById("OutActivityIntr").style.display = "block";

}


function getActIntro(ActpageInt,rows) {
    $.ajax(
        {
            url:API.activityIntro+"?page="+ActpageInt+"&rows="+rows,
            type:"GET",
            dataType:"json",

            success:function (data) {


                // console.log("success")
                // console.log(data);
                ActpageMax = Math.ceil(data.data.total/6);
                // console.log(PropageMax,"fcccccc");
                for(var i = 0;i<data.data.activities.length;i++) {
                    var outDiamondDiv_3 = document.createElement("div");
                    outDiamondDiv_3.className = "outDiamondDiv_3";

                    var diamondDiv_3 = document.createElement("div");
                    diamondDiv_3.className = "diamondDiv_3";

                    var ActName = document.createElement("div");
                    ActName.innerHTML = data.data.activities[i].id;
                    ActName.className = "ActName";


                    // console.log(123123)


                    diamondDiv_3.appendChild(ActName);
                    outDiamondDiv_3.appendChild(diamondDiv_3);

                    document.getElementById("admin_Activity").appendChild(outDiamondDiv_3);

                }

                var showButton_Act = document.getElementsByClassName("diamondDiv_3")

                for(var i = 0;i<showButton_Act.length;i++){
                    showButton_Act[i].addEventListener("click",(function () {
                        // console.log(123)
                        var index = i;


// console
                        return function () {

                            // console.log("我检查到了监听器")
                            // getGroupNumber(index+1);
                            // getGroupIntro(index+1);
                            console.log(index);

                            var Intro_title = data.data.activities[index].id;
                            ID =  data.data.activities[index].id;
                            actName_0 = data.data.activities[index].name;
                            actIntr_0 = data.data.activities[index].introduce;
                            var obj = data.data.activities[index].date.split(" ");
                            showDate_0 = obj[0].split("-");
                            showTime_0 = obj[1].split(":");

                            showYear_0 =showDate_0[0];
                            showMonth_0 = showDate_0[1];
                            showDay_0 = showDate_0[2];

                            showHour_0 =showTime_0[0];
                            showMin_0 = showTime_0[1];
                            if(groupDuty_0 != null){
                                groupDuty_0 = data.data.activities[index].group.split(",");
                            }
                           if(groupShow_0 !=null){
                               groupShow_0 = data.data.activities[index].shower.split(",");
                           }


                            dataSource_0 = data.data.activities[index].github;



                            var Intro_Content = data.data.activities[index].introduce;
                            showActDetailIntro(Intro_title,Intro_Content);


                        }


                    })(i)) ;
                }
                showPage(ActpageInt,ActpageMax);
            },
            error:function (a,b,c) {
                console.log(a,b,c)
            }

        }
    );
}


getActIntro(1,6);

function nextActPage() {

    if(ActpageInt < ActpageMax){
        // console.log(ActpageMax);
        ActpageInt++;
        document.getElementById("admin_Activity").innerHTML = "";

        getActIntro(ActpageInt,6);

    }
}

function lastActPage() {
    if(ActpageInt>=2){
        ActpageInt--;
        document.getElementById("admin_Activity").innerHTML = "";
        getActIntro(ActpageInt,6);

    }
}

function  jumpToAct_admin() {

    var ActPage = parseInt(document.getElementById("ActTextField").value);

    if(ActPage>0&&ActPage<=ActpageMax){

        document.getElementById("admin_Activity").innerHTML = "";
        getActIntro(ActPage,6);

    }
    else if(ActPage>ActpageMax)
    {
        alert("你输入的页数超过了最大页数")
    }else {
        alert("你输入的页数不符合规范")
    }

}

function showPage(currentPage,TotalPage) {

    document.getElementById("currentPage").innerHTML = currentPage;
    document.getElementById("totalPage").innerHTML = TotalPage;

}


document.getElementById("SetUpNewActButton").onclick = function () {
    document.getElementById("admin_mainbody_act").classList.remove("display");
    document.getElementById("admin_mainbody_act").classList.add("display--none");
    document.getElementById("newAct").style.display = "block";
};

document.getElementById("ChangeActButton").onclick = function () {
    // document.getElementById("OutActivityIntr").classList.remove("display");
    document.getElementById("OutActivityIntr").style.display = "none";
    document.getElementById("changeAct").style.display = "block";

    document.getElementById("changeActName").value = actName_0;
    console.log(actName_0)
    document.getElementById("changeActIntr").innerHTML = actIntr_0;
    console.log(actIntr_0);
    var Time_0 = document.getElementsByClassName("changeTime");
    Time_0[0].value = showYear_0;
    Time_0[1].value = showMonth_0;
    Time_0[2].value = showDay_0;
    Time_0[3].value = showHour_0;
    Time_0[4].value = showMin_0;

    //js设置checkBox选中


    var boxes_duty = document.getElementsByClassName("ChangegroupDuty_name");
    for( var i=0;i<boxes_duty.length;i++){
        for(  var j=0;j<groupDuty_0.length;j++){
            if(boxes_duty[i].value == groupDuty_0[j]){
                boxes_duty[i].checked = true;

            }console.log(boxes_duty[i],groupDuty_0[j])
        }
    }

    var boxes_show = document.getElementsByClassName("NewgroupDuty_name");
    for( var i=0;i<boxes_duty.length;i++){
        for(  var j=0;j<groupShow_0.length;j++){
            if(boxes_show[i].value == groupShow_0[j]){
                boxes_show[i].checked = true;

            }console.log(boxes_show[i],groupShow_0[j])
        }
    }


    document.getElementById("change_dataSource").value = dataSource_0;





};



//******************************************************有关post的**************************

//这是创建活动的
var actName,actIntr,showDate,showYear,showMonth,showDay,showHour,showMin,groupDuty,groupShow,dataSource;
document.getElementById("newActButton").onclick = function () {
    actName = document.getElementById("setActName").value;
    actIntr = document.getElementById("setActIntr").value;
    showDate = document.getElementsByClassName("SetTime");

        showYear = showDate[0].value;
        showMonth = showDate[1].value;
        showDay = showDate[2].value;
        showHour = showDate[3].value;
        showMin = showDate[4].value;


        var obj = document.getElementsByClassName("NewgroupDuty_name")
        groupDuty = [];
        for(var n = 0;n<obj.length;n++){
            if(obj[n].checked)
                groupDuty.push(obj[n].value);
        }
        // console.log(groupDuty.toString());

        var showObj = document.getElementsByClassName("NewgroupShow_name")
        groupShow = [];
        for(var s = 0;s<showObj.length;s++){
            if(showObj[s].checked)
                groupShow.push(showObj[s].value);
        }


        dataSource = document.getElementById("new_dataSource").value;

    $.ajax({
        url:API.setNewAct,
        method:"POST",
        data:{
            "name":actName,
            "introduce":actIntr,
            date:showYear+"-"+showMonth+"-"+showDay +" "+showHour+":"+showMin+":00",
            group:groupDuty.toString() ,
            shower:groupShow.toString() ,
            github:dataSource
        },
        success:function (data) {

            console.log(data)
        }
    });


}
// 修改活动
document.getElementById("ChangeButton").onclick =function () {
    actName = document.getElementById("changeActName").value;
    actIntr = document.getElementById("changeActIntr").value;
    showDate = document.getElementsByClassName("changeTime");

    showYear = showDate[0].value;
    showMonth = showDate[1].value;
    showDay = showDate[2].value;
    showHour = showDate[3].value;
    showMin = showDate[4].value;


    var obj = document.getElementsByClassName("ChangegroupDuty_name")
    groupDuty = [];
    for(var n = 0;n<obj.length;n++){
        if(obj[n].checked)
            groupDuty.push(obj[n].value);
    }
    // console.log(groupDuty.toString());

    var showObj = document.getElementsByClassName("ChangegroupShow_name")
    groupShow = [];
    for(var s = 0;s<showObj.length;s++){
        if(showObj[s].checked)
            groupShow.push(showObj[s].value);
    }


    dataSource = document.getElementById("change_dataSource").value;

    $.ajax({
        url:API.changeAct,
        method:"POST",
        data:{
            "id":ID,
            "name":actName,
            "introduce":actIntr,
            "date":showYear+"-"+showMonth+"-"+showDay +" "+showHour+":"+showMin+":00",
            "group":groupDuty.toString() ,
            "shower":groupShow.toString() ,
            "github":dataSource
        },
        success:function (data) {

            console.log(data)
        }
    });
};


