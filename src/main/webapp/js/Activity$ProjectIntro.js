/**
 * Created by 延松松松松 on 2017/7/14.
 */

var page = 1;
var pageMax;


//点击项目菱形的时候 显示项目详细介绍
function showProDetailIntro() {

    document.getElementById("mainBody_3").classList.remove("display");
    document.getElementById("mainBody_3").classList.add("display--none");

    document.getElementById("OutProjectIntr").style.display = "block";

}

function getProIntro(page,rows) {
    $.ajax(
        {
            url:API.ProjectIntro+"?page="+page+"&rows="+rows,
            type:"GET",
            dataType:"json",

            success:function (data) {


                // console.log("success")
                console.log(data);
                pageMax = Math.ceil(data.data.total/6);
                // console.log(pageMax,"fcccccc");
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



                            return function () {

                                console.log("我检查到了监听器")
                                // getGroupNumber(index+1);
                                // getGroupIntro(index+1);

                                showProDetailIntro();
                            }


                        })(i)) ;
                    }


            },
            error:function (a,b,c) {
                console.log(a,b,c)
            }

        }
    );
}

getProIntro(page,6);
function nextPage() {

    if(page < pageMax){
        console.log(pageMax);
        page++;
        document.getElementById("Project").innerHTML = "";
        getProIntro(page,6);
    }
}

function lastPage() {
    if(page>=2){
        page--;
        document.getElementById("Project").innerHTML = "";
        getProIntro(page,6);
    }
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

