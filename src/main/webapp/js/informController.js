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

    this.numPerPage = 6;
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

            node.onmousedown = (function (item,node) {

                return (function (e) {
                    var pos_x = e.x;
                    var pos_y = e.y;

                    if (!(e.button === 0)){
                        return;
                    }

                    node.onmouseup = (function (e) {
                        if (pos_x === e.x && pos_y === e.y) {

                            updateDetailPage(this.detailPage, notices[item]);
                            scroller.slideToRight();

                        }
                    }).bind(this);

                }).bind(this);

            }).bind(this)(item,node);

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

            body.appendChild(vote);
            body.appendChild(introduce);
        }

        detailPage.appendChild(head);
        detailPage.appendChild(body);

    }

    function createNoticeNode(json) {
        var itemWrapper = document.createElement("DIV");
        itemWrapper.classList.add("item_wrapper");

        var item = document.createElement("DIV");
        item.classList.add("item");

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

    return {
        show: function (page) {
            if (typeof page !== "number" || page < 1) {
                page = 1;
            }
            this.curPage = page;
            var http = new Ajax("test.json", "get", handleResponse.bind(this));
            http.send();
        },
        setNumPerPage: function (num) {
            this.numPerPage = num;
        },
        getNumPerPage: function () {
            return this.numPerPage;
        },

        changeAuthority:function (x) {
            this.authority = x;
        },
        showEditPage:function (x) {
            if (this.authority !== 1){
                return;
            }
        }
    }
})();