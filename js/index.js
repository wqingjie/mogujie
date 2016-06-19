/**
 * Created by Administrator on 2016/5/18.
 */
//右侧导航hover效果
~function () {
    var rightNav = document.getElementById('rightNav');
    var rightNavList = rightNav.getElementsByTagName('div');
    var aList = rightNav.getElementsByTagName('a');
    for (var i = 0; i < rightNavList.length; i++) {
        ~function (i) {
            var cur = rightNavList[i];
            var aCur = aList[i];
            cur.onmouseover = function () {
                var prev = utils.prev(this);
                if (prev) {
                    var a = prev.firstChild;
                    a.style.borderBottom = "1px solid transparent";
                }
                cur.style.backgroundColor = "#ef2f23";
                aCur.style.borderBottom = "1px solid transparent";
            };
            cur.onmouseout = function () {
                var prev = utils.prev(this);
                if (prev) {
                    var a = prev.firstChild;
                    a.style.borderBottom = "1px solid #919191";
                }
                cur.style.backgroundColor = "#202020";
                aCur.style.borderBottom = "1px solid #919191";
            }
        }(i);
    }
}();
//回到顶部+隐藏搜索栏显示
~function () {
    var rightNav = document.getElementById('rightNav');
    var toTop = utils.getElementsByClass("toTop", rightNav)[0];
    var search = utils.getElementsByClass("search", document)[0];
    var a = toTop.getElementsByTagName('a')[0];

    window.onscroll = show;
    function show() {
        var win = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        var h = scrollT - win;
        if (h >= 0) {
            toTop.style.display = "block";
            search.style.display = "block";
        } else {
            toTop.style.display = "none";
            search.style.display = "none";
        }
        toTop.onmouseover = function () {
            toTop.style.backgroundColor = "#ef2f23";
            a.style.borderTop = "1px solid transparent";
        };
        toTop.onmouseout = function () {
            toTop.style.backgroundColor = "#202020";
            a.style.borderTop = "1px solid #919191";
        };
    }

    toTop.onclick = function () {
        var duration = 500;
        var distance = utils.win('scrollTop');
        var interval = 10;
        var step = (distance / duration) * interval;
        var timer = window.setInterval(function () {
            if (utils.win('scrollTop') <= 0) {
                window.clearInterval(timer);
                window.onscroll = show;
                return;
            }
            var scrollTop = utils.win('scrollTop');
            scrollTop -= step;
            utils.win("scrollTop", scrollTop);
        }, interval);
        window.onscroll = null;
        this.style.display = 'none';
    };

}();
//左侧导航
~function () {
    var leftNav = document.getElementById("leftNav");
    var lists = utils.getElementsByClass("list", leftNav);
    for (var i = 0; i < lists.length; i++) {
        ~function (i) {
            var cur = lists[i];
            var nav_mores = utils.getElementsByClass("nav_more", cur)[0];
            var aList = cur.getElementsByTagName("a");
            cur.onmouseover = function () {
                var prev = utils.prev(this);
                if (prev) {
                    prev.className = "list border"
                }
                nav_mores.style.display = "block";
                this.className = "list select";
                underline(aList);
            };
            cur.onmouseout = function () {
                var prev = utils.prev(this);
                if (prev) {
                    prev.className = "list"
                }
                nav_mores.style.display = "none";
                if (this == lists[lists.length - 1]) {
                    this.className = "list boto"
                } else {
                    this.className = "list"
                }
            }
        }(i);
    }

}();
//添加下划线
function underline(ele) {
    for (var i = 0; i < ele.length; i++) {
        ~function (i) {
            var col = ele[i];
            col.onmouseover = function () {
                this.style.textDecoration = "underline";
            };
            col.onmouseout = function () {
                this.style.textDecoration = "none";
            }
        }(i);
    }
}
//nav1下划线
~function () {
    var nav1 = document.getElementById('nav1');
    var nav1As = nav1.getElementsByTagName('a');
    underline(nav1As);
}();
//foot下划线
~function () {
    var foot_t_r = document.getElementById('foot-t-r');
    var oA = foot_t_r.getElementsByTagName('a');
    underline(oA);
    var link = document.getElementById('link');
    var oAs = link.getElementsByTagName('a');
    for (var i = 0; i < oAs.length; i++) {
        ~function (i) {
            var col = oAs[i];
            col.color = col.style.color
            col.onmouseover = function () {
                this.style.textDecoration = "underline";
                this.style.color = "#fd4368";
            };
            col.onmouseout = function () {
                this.style.textDecoration = "none";
                this.style.color = this.color;
            }
        }(i);
    }
}();
//floor下划线
~function () {
    var floor = document.getElementById("floor");
    var spans = floor.getElementsByTagName('span');
    underline(spans);
}();
//hover下拉菜单
~function () {
    /**
     * 滑过元素出现
     * @param ele 触发事件的元素
     * @param ele1 事件操作的元素
     */
    function displayBlock(ele, ele1) {
        ele.onmouseover = function () {
            ele1.style.display = "block";
        };
        ele.onmouseout = function () {
            ele1.style.display = "none";
        }
    }

    /**
     * 滑过改变背景颜色
     * @param ele 要操作的元素
     * @param color 要设置的颜色
     */
    function loop(ele, color) {
        for (var i = 0; i < ele.length; i++) {
            ~function (i) {
                var cur = ele[i];
                cur.oldColor = cur.style.backgroundColor;
                cur.onmouseover = function () {
                    cur.style.backgroundColor = color;
                };
                cur.onmouseout = function () {
                    cur.style.backgroundColor = cur.oldColor;
                }
            }(i);
        }
    }

    //隐藏搜索-hover
    var searchBox = document.getElementById('searchBox');
    var ol = searchBox.getElementsByTagName('ol')[0];
    displayBlock(searchBox, ol);
    var lis = ol.getElementsByTagName('li');
    loop(lis, "#f7f7f7");

    //点击选择搜索范围
    var twoLis = searchBox.getElementsByTagName('li');
    for (var i = 0; i < twoLis.length; i++) {
        var cur = twoLis[i];
        cur.onclick = function () {
            if (this.innerHTML == "商品") {
                utils.prev(this.parentNode).innerHTML = "搜商品";
            } else if (this.innerHTML == "店铺") {
                utils.prev(this.parentNode).innerHTML = "搜店铺";
            }
            this.parentNode.style.display = "none";
        }
    }


    //搜索-hover
    var disBox = document.getElementById('disBox');
    var ol1 = disBox.getElementsByTagName('ol')[0];
    displayBlock(disBox, ol1);
    var lis1 = ol1.getElementsByTagName('li');
    loop(lis1, "#f7f7f7");

    //点击选择搜索范围
    var twoLi = disBox.getElementsByTagName('li');
    for (var i = 0; i < twoLi.length; i++) {
        var cur = twoLi[i];
        cur.onclick = function () {
            if (this.innerHTML == "商品") {
                utils.prev(this.parentNode).innerHTML = "搜商品";
            } else if (this.innerHTML == "店铺") {
                utils.prev(this.parentNode).innerHTML = "搜店铺";
            }
            this.parentNode.style.display = "none";
        }
    }


    //购物车-hover
    var shopL = document.getElementById('shopL');
    var oDiv = shopL.getElementsByTagName('div')[0];
    displayBlock(shopL, oDiv);
    //客户服务-hover
    var service = document.getElementById('service');
    var oUl = service.getElementsByTagName('ul')[0];
    displayBlock(service, oUl);
    var serviceLi = oUl.getElementsByTagName('li');
    loop(serviceLi, "#e4e4e4");
    //我的小店-hover
    var store = document.getElementById('store');
    var storeUl = store.getElementsByTagName('ul')[0];
    displayBlock(store, storeUl);
    var storeLi = storeUl.getElementsByTagName('li');
    loop(storeLi, "#e4e4e4");
}();
//六楼word-hover
~function () {
    var word = document.getElementById('word');
    var oA = word.getElementsByTagName('a');
    for (var i = 0; i < oA.length; i++) {
        ~function (i) {
            var cur = oA[i];
            cur.onmouseover = function () {
                cur.className = "round";
            };
            cur.onmouseout = function () {
                cur.className = null;
            }
        }(i);
    }
}();
//轮播图
~function () {
    var bannerL = document.getElementById('bannerL');
    var inner = document.getElementById('inner');
    var oDiv = inner.getElementsByTagName('div');
    var imgList = inner.getElementsByTagName('img');
    var tips = document.getElementById('tips');
    var lis = tips.getElementsByTagName('li');
    var leftBtn = document.getElementById('leftBtn');
    var rightBtn = document.getElementById('rightBtn');
    inner.style.width = inner.offsetWidth + bannerL.offsetWidth + "px";

    var jsonData = null;
    ~function dataBind() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "data.txt", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                jsonData = utils.formatJSON(xhr.responseText);
            }
        };
        xhr.send(null);

        var str = '';
        for (var i = 0; i < jsonData.length; i++) {
            var cur = jsonData[i];
            str += '<div><img src = ""trueSrc="' + cur.img + '"/></div>'
        }
        str += '<div><img src = ""trueSrc="' + jsonData[0].img + '"/></div>';
        inner.innerHTML = str;
        utils.setCss(inner, 'width', (jsonData.length + 1) * 715);
        str = '';
        for (var j = 0; j < jsonData.length; j++) {
            if (j === 0) {
                str += '<li class="select1"><img src="img/run.png" alt=""/></li>'
            } else {
                str += '<li><img src="img/run.png" alt=""/></li>'
            }
        }
        tips.innerHTML = str;
    }();

    function imgDelay() {
        for (var i = 0; i < imgList.length; i++) {
            ~function (i) {
                var curImg = imgList[i];
                if (curImg.isLoaded)return;
                var tempImg = new Image();
                tempImg.src = curImg.getAttribute('trueSrc');
                tempImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = 'block';
                    animate(curImg, {opacity: 1}, 500);
                    tempImg = null;
                };
                curImg.isLoaded = true;
            }(i);
        }
    }

    window.setTimeout(imgDelay, 1000);

    var step = 0;
    ~function () {
        for (var i = 0; i < lis.length; i++) {
            var cur = lis[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                animate(inner, {left: step * -715}, 1000);
                align();
            }
        }
    }();

    function align() {
        for (var i = 0; i < lis.length; i++) {
            var cur = lis[i];
            var tempStep = step > lis.length - 1 ? 0 : step;
            if (tempStep === i) {
                cur.className = "select1";
                cur.id = "select1";
            } else {
                cur.className = "";
            }
        }
    }

    //var select1 = document.getElementById('select1');
    //animate(select1, {transform: 360},3000);
    function autoMove() {
        if (step == imgList.length - 1) {
            step = 0;
            utils.setCss(inner, "left", 0)
        }
        step++;
        animate(inner, {left: step * -715}, 800);
        align();
    }

    var timer = window.setInterval(autoMove, 3500);

    bannerL.onmouseover = function () {
        leftBtn.style.display = rightBtn.style.display = "block";
        window.clearInterval(timer);
    };
    bannerL.onmouseout = function () {
        leftBtn.style.display = rightBtn.style.display = "none";
        timer = window.setInterval(autoMove, 2000);
    };

    leftBtn.onclick = function () {
        if (step == 0) {
            step = imgList.length - 1;
            utils.setCss(inner, "left", step * -715)
        }
        step--;
        animate(inner, {left: step * -715}, 1000);
        align();
    };
    rightBtn.onclick = autoMove;


    function opacityChange(ele, num1, num2) {
        ele.onmouseover = function () {
            this.style.opacity = num1;
        };
        ele.onmouseout = function () {
            this.style.opacity = num2;
        }
    }

    opacityChange(leftBtn, 0.7, 0.4);
    opacityChange(rightBtn, 0.7, 0.4);

}();

//限时抢购
~function () {
    function getTime() {
        var now = new Date();
        var target = new Date("2016/7/15 18:00:00");
        var allms = target.getTime() - now.getTime();
        //var day = Math.floor(allms/1000/60/60/24);//余下多少天
        var h = Math.floor(allms / 1000 / 60 / 60 % 24);// 不满一天就是剩下的小时
        var m = Math.floor(allms / 1000 / 60 % 60);//不满一小时的就是剩余的分钟
        var s = Math.floor(allms / 1000 % 60);
        var hElement = document.getElementById('hour');
        var mElement = document.getElementById('minute');
        var sElement = document.getElementById('second');
        hElement.innerHTML = zero(h);
        mElement.innerHTML = zero(m);
        sElement.innerHTML = zero(s);
    }

    getTime();
    var timer = setTimeout(function () {
        clearTimeout(timer);
        getTime();//隔一秒先调用一次
        setTimeout(arguments.callee, 1000);
    }, 1000);

    //补零方法
    function zero(num) {
        console.log(num);
        return num < 10 ? "0" + num : num;
    }
}();

//搜索栏表单验证
~function () {
    var search1 = document.getElementById('search1');
    var search2 = document.getElementById('search2');
    search1.onfocus = function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    };
    search2.onfocus = function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    };
}();




