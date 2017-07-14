function  getGroupNumber(num) {

    if(a.style.display == "none"){
        document.getElementById("groupMumIntr").innerHTML = "";
    }


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



function getGroupIntro(num) {

    var GroupName;

    switch (num){

        case 1:  GroupName = "后台组介绍";
            break;
        case 2:  GroupName = "前端组介绍";
            break;
        case 3:  GroupName = "安卓组介绍";
            break;
        case 4:  GroupName = "IOS组介绍";
            break;
        case 5:  GroupName = "游戏组介绍";
            break;
        case 6:  GroupName = "设计组介绍";
            break;
    }

          console.log(num);

    $.ajax(
        {
            url:API.GroupNumIntro+"?groupId="+num,
            type:"GET",
            dataType:"json",

            success:function (data) {

                document.getElementsByClassName("groupName").innerHTML = GroupName;
                document.getElementsByClassName("IntroContent").innerHTML = data.introduce;

                console.log(data.introduce);


            },
            error:function (a,b,c) {
                console.log(a,b,c)
            }

        }
    );

}




var a = document.getElementById("mainBody_group_1");
function ShowGroupNumber() {

    document.getElementById("mainBody_2").classList.remove("display");
    document.getElementById("mainBody_2").classList.add("display--none");

    a.style.display = "block";

}

var showButton = document.getElementsByClassName("showGroupMumber")

for(var i = 0;i<showButton.length;i++){
    showButton[i].addEventListener("click",(function () {
        console.log(i);
        var index = i;



        return function () {


            getGroupNumber(index+1);
            getGroupIntro(index+1);

            ShowGroupNumber();
        }


    })(i)) ;
}
