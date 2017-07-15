/**
 * Created by zhou on 2017/7/7.
 */
var line=document.getElementsByTagName("content");
var deleteBtn=document.getElementsByClassName("deletebtn");

console.log(line);
console.log(deleteBtn)
for(var i=0;i<deleteBtn.length;i++){
    (function (e) {
        deleteBtn[e].onclick=function () {
            line

        }
    })(i)

}