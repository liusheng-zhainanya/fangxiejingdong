// 活动顶部广告点击事件
let ggT=0;
$("#btn1").on("click", function () {
    $(".firstScreen .activityTop").css("display", "none")
    ggT=80;
})
//换城市定位
$(".ul-content-list1").find("a").on("click", function () {
    $(".f1-text").html($(this).html())
    $(this).addClass("ww").removeClass("w").parent()
        .siblings().children().addClass("w").removeClass("ww");
})
// input框文字变换
~function () {
    let fld = true;
    setInterval(() => {
        if (fld) {
            $("#search .form input").attr("placeholder", "欧普照明")
        } else {

            $("#search .form input").attr("placeholder", "商品搜索")
        }
        fld = !fld;
    }, 6000);
}()
// input框下hotWords文字变换
~function () {
    let fld = true;
    setInterval(() => {
        if (fld) {
            $("#specHotWord").html("企业年货节");
        } else {
            $("#specHotWord").html("抢乐视电视");
        }
        fld = !fld;
    }, 3000);
}()
// li滑动
~function () {
    //li滑上
    $(".JS_cate_l li").mouseenter(function (e) {
        let a = $(this).index()
        $("#JS_cate_r").css({ "display": "block", "zIndex": 100 });
        if (a % 2 === 0 && a > 1) {
            $("#JS_cate_r .JS_cate_r-z").eq(0).css("display", "block").siblings().css("display", "none")
        } else {
            $("#JS_cate_r .JS_cate_r-z").eq(1).css("display", "block").siblings().css("display", "none")
        }
    })
    //li滑出
    $(".fs_col1").mouseleave(function () {
        $("#JS_cate_r").css("display", "none");
    })
    // li右侧弹出滑动的左偏移量需要的值
    let f1 = utils.offset($(".JS_cate_l")[0]).l;
    let f2 = $(".JS_cate_l")[0].offsetWidth;
    function fn1() {
        // 右侧弹出的上偏移量
        let c = utils.offset($("#JS_cate_r")[0]).t;
        // 左侧的上偏移量
        let d = utils.offset($(".JS_cate_l")[0]).t;
        // 纵向滚动条的高度
        let e = utils.win('scrollTop');
        if (c <= e && d <= e) {
            // 右侧弹出加固定定位
            $("#JS_cate_r").css({ "position": "fixed", "top": 0, left: f1 + f2 })
        } else {
            $("#JS_cate_r").css({ "position": "absolute", "top": 0, "left": "" })
        }
    }
    // li右侧弹出滑动  二级事件
    window.addEventListener("scroll", fn1)
}()
//倒计时
~function () {

    let timer = setInterval(fn, 1000)

    function fn() {
        //Sun Jan 19 2020 16:50:22 GMT+0800 (中国标准时间)
        
        
         //获取年月日字符串
        let time = new Date();
        let endDate=time.toLocaleDateString();//获取本地年月日字符串
        let endTime = new Date(`${endDate} 23:59`);
        let addZero = val => val < 10 ? "0" + val : val;
        let diffTime = endTime - time;
        if (diffTime <= 0) {
            clearInterval(timer);
            return;
        }
        let hour = Math.floor(diffTime / 1000 / 60 / 60)//获取小时
        let min = Math.floor((diffTime - hour * 60 * 60 * 1000) / 1000 / 60)//获取分
        let sec = Math.floor((diffTime - hour * 60 * 60 * 1000 - min * 60 * 1000) / 1000)//获取秒
        $(".s-span-1").html(addZero(hour));
        $(".s-span-2").html(addZero(min));
        $(".s-span-3").html(addZero(sec));
    }
    fn();
}()
//滚动
~function () {
    let c;
    let d;
    let box = document.getElementById("box1")
    let span = document.getElementById("scroll-bar-a");
    let s;
    s = setInterval(ary, 10);
    function ary() {
        c = parseFloat(box.style.left);
        d = parseFloat(span.style.left);
        let e = 200 * 861 / 2200;
        c -= 0.5;
        d = Math.abs(c) * 861 / 2200;
        box.style.left = c + "px";
        span.style.left = d + "px";
        if (Math.abs(c) >= 2200) {
            clearInterval(s)
            box.style.left = "-200px";
            span.style.left = `${e}px`;
            s = setInterval(ary, 10)
        }
    }
    $(".gundong-z").mouseenter(function () {
        //移入事件
        clearInterval(s);

    })
    $(".gundong-z").mouseleave(function () {
        //移出事件
        s = setInterval(ary, 10)
    })
    // 拖拽
    // let w1=utils.offset($("#scroll-bar-a ")[0]).l;    
    $("#scroll-bar-a").mousedown(function (e) {
        clearInterval(s);
        let d1 = e.clientX;
        let d2 = parseFloat(span.style.left);
        let d3 = parseFloat(box.style.left);
        // console.log(d1,d2);
        let m2;
        let index=0;
        document.onmousemove = function (e) {
            clearInterval(s);
            // console.log(m1);
            let m3 = e.clientX;
            let zf=m3-index;
            index=m3;
            m2 = d1 - m3;
            console.log(m2);
            
            // console.log(s1);
            let dzx2 = parseFloat(span.style.left);
            
            if (dzx2 >= 861&&zf>=0) {
                box.style.left = "-2200px";
                span.style.left = "861px";
                return;
            } else if (dzx2 <= 0&&zf<=0) {
                box.style.left = "0px";
                span.style.left = "0px";
                return;
            } else {
                box.style.left = d3 + m2 * 2200 / 861 + "px";
                span.style.left = d2 - m2 + "px";
            }
        }
        document.onmouseup = function (e) {
            // s = setInterval(ary, 10);
            // $(".gundong-z").mouseenter(function () {
            //     //移入事件
            //     clearInterval(s);
            // })
            // $(".gundong-z").mouseleave(function () {
            //     //移出事件
            //     s = setInterval(ary, 10)
            // })
            document.onmousemove = null;
            document.onmouseup = null;
        }
    })
}()
// 选项卡
~function(){
    $(".tab_head li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let a=$(this).index();
        $(".list-xuan-b").eq(a).addClass("active").siblings().removeClass("active");
    })
}()
// 为你推荐
~function(){
    let a;
    $(".feed-tab-wrapper ul li").click(function(){
        let c=utils.offset($("#floorhd")[0]).t;
        utils.win("scrollTop",c);
        a = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).siblings().find("span").removeClass("active");
        $(this).find("span").addClass("active");
        $(".wntjWY ul li").eq(a).addClass("active").siblings().removeClass("active");
        $(".wntjWY ul li").eq(a).siblings().find("span").removeClass("active");
        $(".wntjWY ul li").eq(a).find("span").addClass("active");
        if (a % 2 === 0) {
            $(".moreDiv1").eq(0).addClass("active").siblings().removeClass("active");
        } else {
            $(".moreDiv1").eq(1).addClass("active").siblings().removeClass("active");
        }
    })
// 每一个li
$(".wntjLis").mouseenter(function(){
    $(this).find(".more-div4").css("opacity",1);
})
$(".wntjLis").mouseleave(function(){
    $(this).find(".more-div4").css("opacity",0);
})
$(".more-div4-rt").click(function(){
    $(this).parent(".more-div4").css("opacity",0);
    console.log(2);
})
// 为你推荐下边的点击
function fn4(){
    let e=utils.offset($("#syp1")[0]).t;
    let aT=utils.win("scrollTop");
    if(aT>=e){
        $(".feedTFixed").css("display","block");
        $(".feedTFixed ul li").eq(a).addClass("active").siblings().removeClass("active");
        $(".feedTFixed ul li").eq(a).siblings().find("span").removeClass("active");
        $(".feedTFixed ul li").eq(a).find("span").addClass("active");
        $("#elevator").addClass("elevatorFixAdd");

    }else{
        $(".feedTFixed").css("display","none");
        $("#elevator").removeClass("elevatorFixAdd");
    }

}
window.addEventListener("scroll", fn4);
}()
// 搜索框
~function () {
    // 上搜索框
    function fn2() {
        let eleL=utils.offset($(".elevator")[0]).l;
        let a=utils.win("scrollTop");
        if(a>=640-ggT){
            $("#search").addClass("search-fix");
        }else if(a<640-ggT){
            $("#search").removeClass("search-fix");
        }
        if(a>=750-ggT){
            $("#elevator").addClass("elevatorFix");
            $("#elevator").css("left",eleL);
            $("#elevatorA1").addClass("elevatorTopFix");
        }else if(a<750-ggT){
            $("#elevator").removeClass("elevatorFix");
            $("#elevator").css("left",1210);
            $("#elevatorA1").removeClass("elevatorTopFix");
        }
    }
    // 下广告
   function fn3(){
    let a=utils.win("scrollTop");
    if(a>=1035-ggT){
        $(".activityBar").addClass("activityBarO")

    }else if(a<1035-ggT){
        $(".activityBar").removeClass("activityBarO");

    }
   }
    window.addEventListener("scroll", fn2);
    window.addEventListener("scroll", fn3);
    // 下广告点击
   $(".fixedBar3").click(function(){
       $(".activityBar").css("display","none")
   })
}()
// 右侧变色加点击
~function(){
    function fn5(){
        // 右侧变色
        let a=utils.win("scrollTop");
        $("#elevator ul li").find(".itemMs").removeClass("itemMs");
        $("#elevator ul li").find(".rFAdd").removeClass("rFAdd");
        if(a>=750-ggT&&a<960-ggT){
            $("#elevator ul li").eq(0).find("span").addClass("itemMs");
        }else if(a>=960-ggT&&a<1559-ggT){
            $("#elevator ul li").eq(1).find(".rFImg2").addClass("rFAdd");

        }else if(a>=1559-ggT&&a<2559-ggT){
            $("#elevator ul li").eq(2).find("span").addClass("itemMs");
        }else if(a>=2559-ggT&&a<3374-ggT){
            $("#elevator ul li").eq(3).find("span").addClass("itemMs");
        }else if(a>=3374-ggT){
            $("#elevator ul li").eq(4).find("span").addClass("itemMs");
        }
    }
    window.addEventListener("scroll",fn5);
    // 右侧top点击
    $("#elevatorA1").click(function(){
        let a=utils.win("scrollTop");
        let timer=setInterval(()=>{
            a-=50;
            if(a<=0){
                a=0;
                clearInterval(timer);
            }
            utils.win("scrollTop",a);
            console.log(1);
            
        },10)
    })
    // 右侧点击
    $("#elevator ul li").eq(0).click(function(){
        let a=utils.win("scrollTop");
        let timer=setInterval(()=>{
            if(a>700-ggT){
                a-=30;
                if(a<=700-ggT){
                    a=700-ggT;
                    clearInterval(timer);
                }
            }else if(a<700-ggT){
                a+=30;
                if(a>=700-ggT){
                    a=700-ggT;
                    clearInterval(timer);
                }
            }
            utils.win("scrollTop",a);
        },10)
    })
    $("#elevator ul li").eq(1).click(function(){
        let a=utils.win("scrollTop");
        let timer=setInterval(()=>{
            if(a>990-ggT){
                a-=30;
                if(a<=990-ggT){
                    a=990-ggT;
                    clearInterval(timer);
                }
            }else if(a<990-ggT){
                a+=30;
                if(a>=990-ggT){
                    a=990-ggT;
                    clearInterval(timer);
                }
            }
            utils.win("scrollTop",a);
        },10)
    })
    $("#elevator ul li").eq(2).click(function(){
        let a=utils.win("scrollTop");
        let timer=setInterval(()=>{
                if(a>1589-ggT){
                    a-=30;
                    if(a<=1589-ggT){
                        a=1589-ggT;
                        clearInterval(timer);
                    }
                }else if(a<1589-ggT){
                    a+=30;
                    if(a>=1589-ggT){
                        a=1589-ggT;
                        clearInterval(timer);
                    }
                }
            utils.win("scrollTop",a);
        },10)
    })
    $("#elevator ul li").eq(3).click(function(){
        let a=utils.win("scrollTop");
        let timer=setInterval(()=>{
                if(a>2589-ggT){
                    a-=30;
                    if(a<=2589-ggT){
                        a=2589-ggT;
                        clearInterval(timer);
                    }
                }else if(a<2589-ggT){
                    a+=30;
                    if(a>=2589-ggT){
                        a=2589-ggT;
                        clearInterval(timer);
                    }
                }
            utils.win("scrollTop",a);
        },10)
    })
    $("#elevator ul li").eq(4).click(function(){
        let a=utils.win("scrollTop");
        let timer=setInterval(()=>{
                if(a>3404-ggT){
                    a-=30;
                    if(a<=3404-ggT){
                        a=3404-ggT;
                        clearInterval(timer);
                    }
                }else if(a<3404-ggT){
                    a+=30;
                    if(a>=3404-ggT){
                        a=3404-ggT;
                        clearInterval(timer);
                    }
                }
            utils.win("scrollTop",a);
        },10)
    })
}()



