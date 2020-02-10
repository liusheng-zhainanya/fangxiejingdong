// BUG
// 1.sw1-5,忘记取消划动切换效果
// 2.SW6-9 频道广场 四 初始化没有
// 3.SW6-9 频道广场 四 切换网页，再切回来，会同时开始 sw5特性当页面文档不在当前视窗显示时（浏览器tab），Swiper会停止自动切换，显示时会恢复自动切换（Swiper5新增）。
// 4.SW6-9 频道广场 四 垂直向上切，应该向下

// SW1  中
var mySwiper1 = new Swiper('#sw1', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    // 淡入淡出
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        clickableClass: 'my-pagination-clickable',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})
// SW2  中you
var mySwiper2 = new Swiper('#sw2', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    // 淡入淡出
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// SW3  秒杀
var mySwiper3 = new Swiper('#sw3', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
// SW4  秒杀
var mySwiper4 = new Swiper('#sw4', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        clickableClass: 'my-pagination-clickable',
    },

})
// SW5 发现
var mySwiper5 = new Swiper('#sw5', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        clickableClass: 'my-pagination-clickable',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// SW6 频道广场 四之一
setTimeout(() => {
    var mySwiper6 = new Swiper('#sw6', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay: true, //等同于以下设置
        speed:1000,
        autoplay: {
            delay: 7000,
            stopOnLastSlide: false,
            // 触碰后自动切换也不会停止
            disableOnInteraction: false,
        },
        noSwiping : true,
    })
}, 0);
setTimeout(() => {
// SW7 频道广场 四之一
var mySwiper7 = new Swiper('#sw7', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    speed:1000,
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    noSwiping : true,
})
}, 2000);
setTimeout(() => {
// SW8 频道广场 四之一
var mySwiper8 = new Swiper('#sw8', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    speed:1000,
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    noSwiping : true,
})
}, 4000);
setTimeout(() => {
// SW9 频道广场 四之一
var mySwiper9 = new Swiper('#sw9', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true, //等同于以下设置
    speed:1000,
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        // 触碰后自动切换也不会停止
        disableOnInteraction: false,
    },
    noSwiping : true,
})
}, 6000);

//滑上span
$(".swiper-pagination .swiper-pagination-bullet").hover(function () {
    $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
})