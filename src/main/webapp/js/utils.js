/**
 * Created by Administrator on 2017/6/7.
 */
function Ajax(url, method, succeed) {
    if (!(method.toLowerCase() === "get" || method.toLowerCase() === "post")){
        return;
    }
    this.httpRequest = new XMLHttpRequest();
    this.httpRequest.open(method,url);

    this.httpRequest.onreadystatechange = (function () {
        if (this.httpRequest.readyState === 4 && this.httpRequest.status === 200){
            if (typeof succeed === "function"){
                succeed.call(null,this.httpRequest.responseText);
            }
        }
    }).bind(this);

}
Ajax.prototype = {
    httpRequest:null,
    setRequestHeader:function (name, value) {
        if (typeof name === "string" && typeof value === "string"){
            this.httpRequest.setRequestHeader(name,value);
        }
    },
    send:function (data) {
        this.httpRequest.send(data);
    }
}