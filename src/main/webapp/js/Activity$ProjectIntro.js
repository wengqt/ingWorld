/**
 * Created by 延松松松松 on 2017/7/14.
 */

var PropageInt = 1;
var ActpageInt = 1;
var PropageMax,ActpageMax;


//点击项目菱形的时候 显示项目详细介绍
function showProDetailIntro(IntroTitle,IntroContent) {

    document.getElementById("mainBody_3").classList.remove("display");
    document.getElementById("mainBody_3").classList.add("display--none");
    document.getElementById("ProIntroTitle").innerHTML = IntroTitle;
    // console.log(IntroTitle,IntroContent);
    document.getElementById("ProIntoContent").innerHTML = IntroContent;
    document.getElementById("OutProjectIntr").style.display = "block";

}

function getProIntro(PropageInt,rows) {
    $.ajax(
        {
            url:API.ProjectIntro+"?page="+PropageInt+"&rows="+rows,
            type:"GET",
            dataType:"json",

            success:function (data) {


                // console.log("success")
                console.log(data);
                PropageMax = Math.ceil(data.data.total/6);
                // console.log(PropageMax,"fcccccc");
                for(var i = 0;i<data.data.projects.length;i++) {
                    var outDiamondDiv_3 = document.createElement("div");
                    outDiamondDiv_3.className = "outDiamondDiv_3";

                    var showProIntro = document.createElement("div");
                    showProIntro.className = "showProIntro";

                    var ProName = document.createElement("div");
                    ProName.innerHTML = data.data.projects[i].id;
                    ProName.className = "ProName";


                    // console.log(123123)


                    showProIntro.appendChild(ProName);
                    outDiamondDiv_3.appendChild(showProIntro);

                    document.getElementById("Project").appendChild(outDiamondDiv_3);

                }

                    var showButton_Pro = document.getElementsByClassName("showProIntro")

                    for(var i = 0;i<showButton_Pro.length;i++){
                        showButton_Pro[i].addEventListener("click",(function () {
                            console.log(123)
                            var index = i;


// console
                            return function () {

                                // console.log("我检查到了监听器")
                                // getGroupNumber(index+1);
                                // getGroupIntro(index+1);
                                console.log(index);

                                var Intro_title = data.data.projects[index].id;
                                var Intro_Content = data.data.projects[index].introduce;
                                showProDetailIntro(Intro_title,Intro_Content);
                            }


                        })(i)) ;
                    }
                showPage(PropageInt,PropageMax)

            },
            error:function (a,b,c) {
                console.log(a,b,c)
            }

        }
    );
}

getProIntro(1,6);

function nextProPage() {

    if(PropageInt < PropageMax){
        console.log(PropageMax);
        PropageInt++;
        document.getElementById("Project").innerHTML = "";
        getProIntro(PropageInt,6);
    }
}

function lastProPage() {
    if(PropageInt>=2){
        PropageInt--;
        document.getElementById("Project").innerHTML = "";
        getProIntro(PropageInt,6);
    }
}

function  jumpToPro() {

    var ProPage = parseInt(document.getElementById("ProTextField").value);
    console.log(ProPage);
    if(ProPage>0&&ProPage<=PropageMax){

        document.getElementById("Project").innerHTML = "";
        getProIntro(ProPage,6);
    }
    else if(ProPage>PropageMax)
    {
        alert("你输入的页数超过了最大页数")
    }else {
        alert("你输入的页数不符合规范")
    }

}



//*******************************************************************************************************************






//点击活动菱形的时候 显示活动详细介绍
function showActDetailIntro(IntroTitle,IntroContent) {

    document.getElementById("mainBody_4").classList.remove("display");
    document.getElementById("mainBody_4").classList.add("display--none");
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
                    var outDiamondDiv_4 = document.createElement("div");
                    outDiamondDiv_4.className = "outDiamondDiv_3";

                    var showActIntro = document.createElement("div");
                    showActIntro.className = "showActIntro";

                    var ActName = document.createElement("div");
                    ActName.innerHTML = data.data.activities[i].id;
                    ActName.className = "ActName";


                    // console.log(123123)


                    showActIntro.appendChild(ActName);
                    outDiamondDiv_4.appendChild(showActIntro);

                    document.getElementById("Activity").appendChild(outDiamondDiv_4);

                }

                var showButton_Act = document.getElementsByClassName("showActIntro")

                for(var i = 0;i<showButton_Act.length;i++){
                    showButton_Act[i].addEventListener("click",(function () {
                        console.log(123)
                        var index = i;


// console
                        return function () {

                            // console.log("我检查到了监听器")
                            // getGroupNumber(index+1);
                            // getGroupIntro(index+1);
                            console.log(index);

                            var Intro_title = data.data.activities[index].id;
                            var Intro_Content = data.data.activities[index].introduce;
                            showActDetailIntro(Intro_title,Intro_Content);
                        }


                    })(i)) ;
                    showPage(ActpageInt,ActpageMax);
                }


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
        document.getElementById("Activity").innerHTML = "";
        getActIntro(ActpageInt,6);
    }
}

function lastActPage() {
    if(ActpageInt>=2){
        ActpageInt--;
        document.getElementById("Activity").innerHTML = "";
        getActIntro(ActpageInt,6);
    }
}

function  jumpToAct() {

    var ActPage = parseInt(document.getElementById("ActTextField").value);

    if(ActPage>0&&ActPage<=ActpageMax){

        document.getElementById("Activity").innerHTML = "";
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

    document.getElementById("currentPage_Act").innerHTML = currentPage;
    document.getElementById("totalPage_Act").innerHTML = TotalPage;

    document.getElementById("currentPage_Pro").innerHTML = currentPage;
    document.getElementById("totalPage_Pro").innerHTML = TotalPage;


}
