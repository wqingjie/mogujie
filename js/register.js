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
//注册页foot 加下划线
~function () {
    var no_1 = document.getElementById('no1');
    var no_3 = document.getElementById('no3');
    var alis1 = no_1.getElementsByTagName('a');
    var alis2 = no_3.getElementsByTagName('a');
    underline(alis1);
    underline(alis2);
}();
//注册表单验证
~function () {
    var phone = document.getElementById('phone');
    var pass = document.getElementById('pass');
    var getCode = document.getElementById('getCode');
    var pic_f = document.getElementById('pic_f');
    var oSpan = pic_f.getElementsByTagName('span');
    var pics = document.getElementById('pics');

    phone.onfocus = function () {
        var oTip = document.getElementById('error_tip');
        if (oTip) {
            this.parentNode.removeChild(oTip);
        }
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    };
    phone.onblur = function () {
        var reg = /^\s*$/;
        if (reg.test(this.value)) {
            this.value = this.defaultValue
        }
        //再把表单提交前 去空额
        var regSpace = /\s+/g;
        this.value = this.value.replace(regSpace, "");
        var regTrim = /^\s+|\s+$/;
        reg = /^1[34578]\d{9}$/;

        if (reg.test(Number(this.value))) {
            //输入正确展示图片验证区域
            var pics = document.getElementById('pics');
            if (pics) {
                pics.style.display = "block";
            }
        } else {
            var error_tip = document.getElementById('error_tip');
            if (!error_tip) {
                error_tip = document.createElement("div");
                error_tip.id = 'error_tip';
                this.parentNode.insertBefore(error_tip, utils.prev(this));
            }

            if (this.value == "手机号码") {
                error_tip.innerHTML = "请填写手机号";
                return;
            }
            error_tip.innerHTML = "请填写正确的手机号";
        }
    };

    pass.onfocus = function () {
        var oTip = document.getElementById('error_tip');
        if (oTip) {
            this.parentNode.removeChild(oTip);
        }

        if (this.value == this.defaultValue) {
            this.value = "";
        }
    };
    pass.onblur = function (){
        var reg = /^\s*$/;
        if (reg.test(this.value)) {
            this.value = this.defaultValue
        }
        //再把表单提交前 去空额
        var regSpace = /\s+/g;
        this.value = this.value.replace(regSpace, "");
        var regTrim = /^\s+|\s+$/;
        reg = /^\d{6}$/;

        if (reg.test(this.value)) {
            //输入正确
        } else {
            var error_tip = document.getElementById('error_tip');
            if (!error_tip) {
                error_tip = document.createElement("div");
                error_tip.id = 'error_tip';
                this.parentNode.insertBefore(error_tip, utils.firstChild(this.parentNode));
            }

            if (this.value == "验证码") {
                error_tip.innerHTML = "请输入验证码";
                return;
            }
            error_tip.innerHTML = "短信校验失败，请重试";
        }
    };

    getCode.onfocus = function () {
        var reg = /^\s*$/;
        if (reg.test(phone.value)) {
            phone.value = phone.defaultValue
        }

        var regSpace = /\s+/g;
        this.value = phone.value.replace(regSpace, "");
        var regTrim = /^\s+|\s+$/;
        reg = /^1[34578]\d{9}$/;

        //getCode获得焦点就创建提示框
        var error_tip = document.getElementById('error_tip');
        if (!error_tip) {
            error_tip = document.createElement("div");
            error_tip.id = 'error_tip';
            phone.parentNode.insertBefore(error_tip, utils.prev(phone));
        }
        //手机号正确提示->转图
        if (reg.test(Number(phone.value))) {
            //输入正确
            error_tip.innerHTML = "请点击下方图片,将她们转到正确方向";
        } else {//不正确提示->输入正确的
            if (phone.value == "手机号码") {
                error_tip.innerHTML = "请填写手机号";
                return;
            }
            error_tip.innerHTML = "请填写正确的手机号";
        }
    };
    document.forms.item(0).onsubmit = function () {
        return false;
    };
    //给每一个图片添加点击事件
    for (var i = 0; i < oSpan.length; i++) {
        var cur = oSpan[i];
        cur.onclick = function () {
            //点击任何图片后错误信息提示框隐藏
            var oTip = document.getElementById('error_tip');
            if (oTip) {
                pics.parentNode.removeChild(oTip);
            }
            var hh = utils.css(this, 'backgroundPositionY');
            //var temp = -75;
            //hh += temp;
            utils.setCss(this,'backgroundPositionY', hh+=(-75));
        };

    }
}();