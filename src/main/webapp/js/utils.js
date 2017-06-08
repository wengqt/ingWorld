/**
 * Created by Administrator on 2017/6/7.
 */
function Ajax(url, method, succeed) {
    if (!(method.toLowerCase() === "get" || method.toLowerCase() === "post")){
        return;
    }

    httpRequest = new XMLHttpRequest();
    httpRequest.open(method,url);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200){
            if (typeof succeed === "function"){
                succeed.call(null,httpRequest.responseText);
            }
        }
    }

}
Ajax.prototype = {
    httpRequest:null,
    setRequestHeader:function (name, value) {
        if (typeof name === "string" && typeof value === "string"){
            this.httpRequest.setRequestHeader(name,value);
        }
    },
    send:function (data) {
        httpRequest.send(data);
    }
}