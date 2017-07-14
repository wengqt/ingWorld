/**
 * Created by 延松松松松 on 2017/7/10.
 */
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
                console.log(11)
                for(var i = 0;i<data.data.members.length;i++)
                {
                    var personalIntroDiv = document.createElement("div");
                    personalIntroDiv.className = "personalIntroDiv";

                    var PerIntrDiv = document.createElement("div");
                    PerIntrDiv.className = "diamondDiv_group_1";

                    var personalIntroText = document.createElement("div");
                    personalIntroText.className = "personalIntroText";
                    console.log("1");


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




var a = document.getElementById("mainBody_group_1");
function ShowGroupNumber() {


    document.getElementById("mainBody_2").classList.remove("display");
    document.getElementById("mainBody_2").classList.add("display--none");
    console.log(123)
    a.style.display = "block";



}

var showButton = document.getElementsByClassName("showGroupMumber")

for(var i = 0;i<showButton.length;i++){
    showButton[i].addEventListener("click",(function () {
        console.log(i);
        var index = i;



            return function () {


                getGroupNumber(index+1);

                ShowGroupNumber();
            }


    })(i)) ;
}


