/**
 * Created by 延松松松松 on 2017/6/10.
 */


$.ajax(
    {
        url:"TranTest.json",
        type:"GET",
        dataType:"json",
        success:function (data) {
            console.log("suc");
            for(var i = 0;i<data.members.length;i++)
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
                personalIntroTextP.innerHTML = data.members[i].name+data.members[i].introduce+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

                personalIntroText.appendChild(personalIntroTextP);
                personalIntroDiv.appendChild(PerIntrDiv);
                personalIntroDiv.appendChild(personalIntroText);
                document.getElementById("groupMumIntr").appendChild(personalIntroDiv)
            }
        },
        error:function (a,b,c) {
            console.log(a,b,c)
        }

    }
);