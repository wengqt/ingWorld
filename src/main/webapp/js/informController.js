/**
 * Created by Administrator on 2017/6/7.
 */
function InformController(informContainer, informButtons, informDetail) {
    this.container = informContainer;
    this.buttons = informButtons;
    this.detailPage = informDetail;
    this.data = {};

    this.container.innerHTML = "";
    this.buttons.innerHTML = "";

    this.numPerPage = 999;
    this.curPage = 1;

    //权限，默认为 0 只能查看通知
    this.authority = 0;

}
InformController.prototype = (function () {

    function handleResponse(res) {
        res = JSON.parse(res);

        if (res.status !== 200) {
            return;
        }
        if (res.data === undefined) {
            this.data = {};
        } else {
            this.data = res.data;
        }

        // 更新DOM

        // 遍历data更新通知内容
        this.container.innerHTML = "";
        var notices = this.data.notice;
        for (var item in notices) {

            var node = createNoticeNode(notices[item]);
            this.container.appendChild(node);


            // node.addEventListener("click", (function (item) {
            //     return function () {
            //
            //         updateDetailPage(this.detailPage, notices[item]);
            //         scroller.slideToRight();
            //
            //     }
            // })(item).bind(this));

            node.onmousedown = (function (item, node) {

                return (function (e) {
                    var pos_x = e.x;
                    var pos_y = e.y;

                    if (!(e.button === 0)) {
                        return;
                    }

                    node.onmouseup = (function (e) {
                        if (pos_x === e.x && pos_y === e.y) {

                            updateDetailPage.call(this, this.detailPage, notices[item]);
                            this.slideToRight();

                        }
                    }).bind(this);

                }).bind(this);

            }).bind(this)(item, node);

        }
    }

    function updateDetailPage(detailPage, json) {
        switch (json.type) {
            case 0:
                detailPage.classList.add("inform_ordinary");
                break;
            case 1:
            case 2:
                detailPage.classList.add("inform_vote");
                break;
        }


        detailPage.innerHTML = "";

        var head = document.createElement("DIV");
        head.classList.add("head");
        head.innerHTML = '<div class="date">' + (json.type === 0 ? "" : "【投票】") + json.date + '</div>'
            + '<div class="title" title=' + json.title + '>' + json.title + '</div>';

        var body = document.createElement("DIV");
        body.classList.add("body")
        if (json.type === 0) {
            body.innerHTML = json.content;
        } else {
            var vote = document.createElement("DIV");
            vote.classList.add("vote");

            var options = json.option;
            for (var i = 0; i < options.length; i++) {
                var input = document.createElement("INPUT");
                input.type = json.type === 1 ? "radio" : "checkbox";
                input.name = "option";
                input.value = i;
                vote.appendChild(input);
                vote.innerHTML += options[i].content + "<br>";
            }
            vote.innerHTML += '<input type="submit" value="确认投票">';

            var introduce = document.createElement("DIV");
            introduce.classList.add("introduce");
            introduce.innerHTML = json.content;

            body.appendChild(introduce);
            body.appendChild(vote);
        }

        if (this.authority === 1) {
            var tmp = document.createElement("DIV");
            tmp.style = "text-align:right;margin-bottom:10px";
            var buttonDelete = document.createElement("DIV");
            buttonDelete.className = "custom-button--red fs-tiny";
            buttonDelete.innerHTML = "删除";
            buttonDelete.addEventListener("click", (function (e) {


                e.currentTarget.classList.add("disabled");
                // 发送一个AJAXX请求

                var deleteRequest = new Ajax(API.deleteNotice + "?id=" + json.id, "GET", (function (res) {
                    res = JSON.parse(res);

                    if (res.status === 200) {
                        alert("chengong!");
                        this.show(this.curPage);
                        this.slideToLeft();
                    } else {
                        e.currentTarget.classList.remove("disabled");
                        alert("失败");
                    }
                }).bind(this));
                deleteRequest.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                deleteRequest.send();


            }).bind(this));
            tmp.appendChild(buttonDelete);
            detailPage.appendChild(tmp);
        }

        detailPage.appendChild(head);
        detailPage.appendChild(body);

    }

    function createNoticeNode(json) {
        var itemWrapper = document.createElement("DIV");
        itemWrapper.classList.add("item_wrapper");


        var item = document.createElement("DIV");
        item.classList.add("item");
        //用于删除等操作
        item.dataset.id = json.id;

        var title = document.createElement("DIV");
        title.classList.add("title");
        title.appendChild(document.createTextNode(json.title));

        var date = document.createElement("DIV");
        date.classList.add("date");
        date.title = json.date;
        date.appendChild(document.createTextNode(json.date));

        var content = document.createElement("DIV");
        content.classList.add("content");
        content.appendChild(document.createTextNode(json.content));

        item.appendChild(title);
        item.appendChild(date);
        item.appendChild(content);

        itemWrapper.appendChild(item);

        return itemWrapper;

    }


    // 与详细页面切换相关
    function backToIndex() {
        window.location.href = "index.html";
    }

    var informContainer = document.getElementsByClassName('inform-container')[0];
    console.log(informContainer);
    var back = document.getElementsByClassName('nav_bar_back')[0];
    back.onclick = backToIndex;


    return {
        show: function (page) {
            if (typeof page !== "number" || page < 1) {
                page = 1;
            }
            this.curPage = page;

            var http = new Ajax(API.getNotice + "?page=" + page + "&rows=" + this.numPerPage, "get", handleResponse.bind(this));

            http.send();
        },
        setNumPerPage: function (num) {
            this.numPerPage = num;
        },
        getNumPerPage: function () {
            return this.numPerPage;
        },

        changeAuthority: function (x) {
            this.authority = x;
        },
        showEditPage: function (x) {
            if (this.authority !== 1) {
                throw new Error("无权限");
                return;
            }

            this.detailPage.classList.remove("inform_ordinary");
            this.detailPage.classList.remove("inform_vote");

            if (x === 1) {
                // 普通通知
                this.detailPage.innerHTML = ''
                    + '<form>'
                    + '<input class="title" name="title">'
                    + '<div class="date">2017-7-7</div>'
                    + '<textarea class="content" name="content">'
                    + '</textarea>'
                    + '<div style="text-align: center" >'
                    + '<div class="submit custom-button--red">发布通知</div>'
                    + '</div>'
                    + '<input type="submit" hidden>'
                    + '</form>';

                this.detailPage.classList.add("inform_ordinary--edit");

                // 绑定发送通知监听器
                var submitBtn = this.detailPage.querySelector(".submit");
                submitBtn.addEventListener("click", this.postNotice.bind(this));

                this.slideToRight();
            } else if (x === 2) {
                // 投票通知
                this.detailPage.innerHTML = '' +
                    '<form>'
                    + '<div class="title-box"><span>【投票】</span><input class="title" name="title"></div>'
                    + '<div class="controller-box">'
                    + '<div class="custom-no-bg-button--lightblue active radio">单选</div>'
                    + '<div class="custom-no-bg-button--lightblue checkbox">多选</div>'
                    + '</div>'
                    + '<div class="content">'
                    + '<textarea class="left"></textarea>'
                    + '<div class="right">'
                    + '<div class="options"> '
                    + '</div>'
                    + '<div style="text-align: center">'
                    + '<div class="add-option custom-no-bg-button--lightblue">+添加选项</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '<div style="text-align: center;margin-top: 10px"><div class="submit custom-button--red fs-small">发布投票</div> </div>'
                    + '</form>';

                this.detailPage.classList.add("inform_vote--edit");

                var addOption = this.detailPage.querySelector(".add-option");
                addOption.addEventListener("click", makeAddOptionListener.bind(this)());

                // 绑定发送通知监听器
                var submitBtn = this.detailPage.querySelector(".submit");
                submitBtn.addEventListener("click", this.postNotice.bind(this));

                // 绑定单选多选监听器
                var controllerBox = this.detailPage.querySelector(".controller-box");
                controllerBox.addEventListener("click", function (e) {
                    var buttonGroup = controllerBox.querySelectorAll("[class*=button]");
                    if (!e.currentTarget.classList.contains("active")) {
                        buttonGroup[0].classList.toggle("active");
                        buttonGroup[1].classList.toggle("active");
                    }
                })

                this.slideToRight();

                function makeAddOptionListener() {
                    var optionContainer = this.detailPage.querySelector(".options");


                    return function () {
                        var optionWrapper = document.createElement("DIV");
                        optionWrapper.classList.add("option-wrapper");

                        var input = document.createElement("INPUT");
                        input.name = "option";
                        input.placeholder = "添加描述";

                        var img = document.createElement("IMG");
                        img.classList.add("icon-delete");
                        img.src = 'img/icon_delete.png';
                        img.addEventListener("click", function () {
                            console.log("ddd")
                            optionContainer.removeChild(optionWrapper);
                        });

                        optionWrapper.appendChild(input);
                        optionWrapper.appendChild(img);

                        optionContainer.appendChild(optionWrapper);

                    }
                }

            } else {
                throw new Error("参数非法 " + x);
            }
        },

        postNotice: function (e) {

            e.currentTarget.classList.add("disabled");

            if (this.detailPage.classList.contains('inform_ordinary--edit')) {
                //    普通通知
                var form = document.getElementsByTagName("form")[0];
                var json = {
                    type: 0,
                    title: form.querySelector(".title").value,
                    content: form.querySelector(".content").value
                }

                var ajax = new Ajax(API.uploadNotice, "POST", function () {
                    console.log("success");
                });
                ajax.setRequestHeader("content-type", "application/json");
                ajax.send(JSON.stringify(json));

            } else if (this.detailPage.classList.contains("inform_vote--edit")) {
                //    投票通知
                var form = document.getElementsByTagName("form")[0];
                var json = {
                    type: 0,
                    title: form.querySelector(".title").value,
                    content: form.querySelector(".content textarea").value
                }
                // 包装json
                var type = form.querySelector(".controller-box .active");
                if (type.classList.contains("checkbox")) {
                    json.type = 2;
                } else {
                    json.type = 1;
                }

                var options = form.querySelectorAll("[name=option]");
                var tmp = [];
                for (var i = 0; i < options.length; i++) {
                    tmp.push({
                        content: options[i].value
                    });
                }
                ;
                json.option = tmp;


                var ajax = new Ajax(API.uploadNotice, "POST", function () {
                    console.log("success");
                });
                ajax.setRequestHeader("content-type", "application/json");
                ajax.send(JSON.stringify(json));

            } else {
                throw new Error("非法");
            }
        },


        slideToLeft: function slideToLeft() {
            informContainer.style.left = "0";
            back.onclick = backToIndex;
            this.show(this.curPage)
        },
        slideToRight: function slideToRight() {
            informContainer.style.left = "-100%";
            back.onclick = this.slideToLeft;
        }


    }

})();