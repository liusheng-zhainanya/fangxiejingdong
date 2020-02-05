var utils = (function () {

    // 封装一个方法，获取一个元素距离body的左、上偏移量body的offsetParent是null
    let offset = function (curEle) {
        var l = curEle.offsetLeft;
        var t = curEle.offsetTop;
        var parent = curEle.offsetParent;
        while (parent) {
            l += parent.clientLeft + parent.offsetLeft;
            t += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            l: l,
            t: t
        }
    }

    //窗口的事，窗口的可视宽度高度
    let win = function (attr, val) {
        if (typeof val === "undefined") {
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = val;
        document.body[attr] = val;
    }

    //类数组转数组
    let toArray = function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (let i = 0; i < likeAry.length; i++) {
                ary.push(likeAry[i]);
            }
        }
        return ary
    }

    //json格式的字符串转换为json格式的对象
    let toJSON = function (str) {
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    };


    //数组去重第三种方法
    Array.prototype.myUnique = function () {
        console.log(this)
        let obj = {};
        for (var i = 0; i < this.length; i++) {
            if (obj[this[i]] !== undefined) {
                this[i] = this[this.length - 1];
                this.length--;
                i--;
                continue;
            }
            obj[this[i]] = this[i]
        }
    }

    //获取元素的单个样式
    let getCss = function (curEle, attr) {
        if ("getComputedStyle" in window) {
            return getComputedStyle(curEle)[attr]
        } else {
            return curEle.currentStyle[attr]
        }
    }

    //线性
    function linear(t, b, c, d) {
        // t : 运动过的时间
        // b ： 开始的位置
        // c : 要运动的总距离
        // d : 需要的总时间；
        // 此时此刻的位置
        return c / d * t + b;
    }
    //动画
    function animate(curEle, target, duration, callBack) {
        // curEle : 要运动的元素
        // target : 目标位置
        // duration : 总时间
        //callBack : 动作结束执行的函数
        let begin = {};
        let change = {};
        for (let key in target) {
            begin[key] = parseFloat(getComputedStyle(curEle)[key])
            change[key] = target[key] - begin[key]
        }
        let t = 0;
        let timer = setInterval(() => {
            t += 20;
            for (let key in change) {
                let cur = linear(t, begin[key], change[key], duration)
                curEle.style[key] = cur + "px";
            }
            if (t >= duration) {
                clearInterval(timer);
                typeof callBack === "function" ? callBack() : null;
            }
        }, 20);
    }

    return {
        offset,
        win,
        toArray,
        getCss,
        toJSON,
        animate,
        linear
    }
})()