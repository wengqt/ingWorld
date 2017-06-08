/**
 * Created by Administrator on 2017/6/7.
 */
function InformController(informContainer, informButtons,informDetail) {
    this.container = informContainer;
    this.buttons = informButtons;
    this.detailPage = informDetail;
    this.data = {};

    this.container.innerHTML = "";
    this.buttons.innerHTML = "";

    this.show = function (page) {
        if (typeof page !== "number" || page < 1) {
            page = 1;
        }
        this.curPage = page;
        var http = new Ajax("test.json", "get", handleResponse.bind(this));
        http.send();
    };
    this.setNumPerPage = function (num) {
        this.numPerPage = num;
    };
    this.getNumPerPage = function () {
        return this.numPerPage;
    };
    this.numPerPage = 6;
    this.curPage = 1;









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


            node.addEventListener("click",(function (item) {
                return function () {

                    updateDetailPage(this.detailPage, notices[item]);
                    scroller.slideToRight();

                }
            })(item).bind(this));

        }
    }
    function updateDetailPage(detailPage,json) {
        switch (json.type){
            case 0:
                detailPage.classList.add("inform_ordinary");
                break;
            case 1:case 2:
                detailPage.classList.add("inform_vote");
                break;
        }



        detailPage.innerHTML = "";

        var head = document.createElement("DIV");
        head.classList.add("head");
        head.innerHTML = '<div class="date">'+(json.type ===0?"":"【投票】")+json.date+'</div>'
                        +'<div class="title">'+json.title+'</div>';

        var body = document.createElement("DIV");
        body.classList.add("body")
        if (json.type === 0){
            body.innerHTML = json.content;
        }else {
            var vote = document.createElement("DIV");
            vote.classList.add("vote");

            var options = json.option;
            for (var i = 0;i<options.length;i++){
                var input = document.createElement("INPUT");
                input.type = json.type===1?"radio":"checkbox";
                input.name = "option";
                input.value = i;
                vote.appendChild(input);
                vote.innerHTML += options[i].content+"<br>";
            }
            vote.innerHTML+='<input type="submit" value="确认投票">';

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

}