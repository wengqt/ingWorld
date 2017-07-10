/**
 * Created by 延松松松松 on 2017/7/10.
 */


var a = document.getElementById("mainBody_group_1");
function ShowGroupNumber() {

    a.style.display = "block";

}

var showButton = document.getElementsByClassName("showGroupMumber")

for(var i = 0;i<showButton.length;i++){
    showButton[i].addEventListener("click",(function () {
        console.log(i);
        return function () {
            ShowGroupNumber();
        }
    })(i)) ;
}