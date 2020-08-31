$(function () {
    //点击高亮
    $(".navbar-nav li").on("click", function () {
        // $(this).addClass('active').siblings().removeClass('active');
        $("html").animate({
            scrollTop: $(".clientHeight").eq($(this).index()).offset().top
        })
        // return false
    });
    //高度自适应
    $(document).ready(function () {
        //初始化、高度
        if ($(window).width() > 992) {
            $(".clientHeight").height($(window).height());
            $("nav").addClass('fixed');
        }else{
            $(".clientHeight").height("100%");
            $("nav").removeClass('fixed');
        }
        //当文档窗口发生改变时 触发  
        $(window).resize(function () {
            if ($(window).width() > 992) {
                $(".clientHeight").height($(window).height());
                $(".header").css({ "background-size": "100% 100%" })
                $("nav").addClass('fixed');
            } else {
                $("nav").removeClass('fixed');
                $(".clientHeight").height("100%");
                $(".header").css({ "background-size": "100% 100%" })
            }
        })
    })
    //滑动高亮
    $(window).scroll(function () {
        // if ($(window).scrollTop() == 0) {
        //     $("nav").removeClass('bg-light');
        // } else {
        //     $("nav").addClass('bg-light');
        // }
        for (let i = 0; i < $(".clientHeight").length; i++) {
            if ($(window).scrollTop() >= $(".clientHeight").eq(i).offset().top) {
                $('.navbar-nav li').eq(i).addClass('active').siblings().removeClass('active');
            }
        }
    });
})