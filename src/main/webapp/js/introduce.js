/**
 * Created by zhou on 2017/6/13.
 */

function loadIntroduce(){
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

        }
    }
    xmlhttp.open("GET","/ajax/demo_get.asp",true);
    xmlhttp.send();
}