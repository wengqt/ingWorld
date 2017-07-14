/**
 * Created by 延松松松松 on 2017/7/14.
 */

//点击项目菱形的时候 显示项目详细介绍
function showProDetailIntro() {

    document.getElementById("mainBody_3").classList.remove("display");
    document.getElementById("mainBody_3").classList.add("display--none");

    document.getElementById("OutProjectIntr").style.display = "block";

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

