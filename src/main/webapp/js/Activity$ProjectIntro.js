/**
 * Created by 延松松松松 on 2017/7/14.
 */

//点击项目菱形的时候 显示项目详细介绍
function showProDetailIntro() {

    document.getElementById("mainBody_3").classList.remove("display");
    document.getElementById("mainBody_3").classList.add("display--none");

    document.getElementById("OutProjectIntr").style.display = "block";

}

function getProIntro(num) {
    $.ajax(
        {
            url:API.GroupNumIntro+"?groupId="+num,
            type:"GET",
            dataType:"json",

            success:function (data) {



                for(var i = 0;i<data.data.members.length;i++)
                {
                    var personalIntroDiv = document.createElement("div");
                    personalIntroDiv.className = "personalIntroDiv";

                    var PerIntrDiv = document.createElement("div");
                    PerIntrDiv.className = "diamondDiv_group_1";

                    var personalIntroText = document.createElement("div");
                    personalIntroText.className = "personalIntroText";



                    var personalIntroTextP = document.createElement("p");
                    personalIntroTextP.className = "personalIntroTextP";
                    personalIntroTextP.innerHTML = data.data.members[i].name+data.data.members[i].introduce+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

                    personalIntroText.appendChild(personalIntroTextP);
                    personalIntroDiv.appendChild(PerIntrDiv);
                    personalIntroDiv.appendChild(personalIntroText);
                    document.getElementById("groupMumIntr").appendChild(personalIntroDiv);

                }
            },
            error:function (a,b,c) {
                console.log(a,b,c)
            }

        }
    );
}


var showButton_Pro = document.getElementsByClassName(" showProIntro")

for(var i = 0;i<showButton_Pro.length;i++){
    showButton_Pro[i].addEventListener("click",(function () {

        var index = i;



        return function () {

            console.log("我检查到了监听器")
            // getGroupNumber(index+1);
            // getGroupIntro(index+1);

            showProDetailIntro();
        }


    })(i)) ;
}


//点击活动菱形的时候 显示活动详细介绍
function showActDetailIntro() {

    document.getElementById("mainBody_4").classList.remove("display");
    document.getElementById("mainBody_4").classList.add("display--none");

    document.getElementById("OutActivityIntr").style.display = "block";

}


var showButton_Act = document.getElementsByClassName(" showActIntro")

for(var i = 0;i<showButton_Act.length;i++){
    showButton_Act[i].addEventListener("click",(function () {

        var index = i;



        return function () {


            // getGroupNumber(index+1);
            // getGroupIntro(index+1);

            showActDetailIntro();
        }


    })(i)) ;
}

