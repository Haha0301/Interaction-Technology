var app=angular.module('app',[]);
app.controller('show',function ($scope) {
    $scope.arr=[];
    for (var i=0;i<60;i++){
        $scope.arr.push(i+1)
    }
});


$(document).ready(function () {

    var header=$("header");
    $(window).scroll(function () {
        var scrollTop=$(window).scrollTop();
        //alert(scrollTop)
        if (scrollTop>0){
            header.css({"background":"rgba(2, 20, 32, 0.7)"})
        }else {
            header.css({"background":"rgba(2, 20, 32, 0.3)"})
        }
        if(scrollTop>200){
            $('.float').css({'opacity':1,'right':50})
        }else{
            $('.float').css({'opacity':0,'right':-34})
        }
    });
    var aLi=$(".nav .click");
    aLi.click(function () {

        $(this).addClass('active').siblings().removeClass('active');
    });

    var oBtn=$('.nav .btn');
    var oForm=$('#form')
    oBtn.click(function(){
        oForm.css({'top':'50%',"opacity":1})
    })

    var oClose=$('#form .close');
    oClose.click(function(){
        oForm.css({'top':'-50%',"opacity":0})
    });
    oClose.hover(function () {
        //alert(1)
        oClose.css('transform','rotate(90deg)')
    },function(){
        oClose.css('transform','rotate(0deg)')
    });

    var r1=$('.tec .honer .r1');
    var r2=$('.tec .honer .r2');
    var r8=$('.tec .honer .r8');
    r1.css("backgroundPosition","0 -33px");
    r2.css("backgroundPosition","0 -66px");
    r8.css("backgroundPosition","0 -264px");

    var aBoss=$('.boss .left li');
    function boss(){
        $('.boss .right').stop().animate({'left':0,"opacity":1})
    }
    boss();
    aBoss.click(function(){
        $('.boss .right').css({'left':'-200px',"opacity":0});
        $('.boss .right').stop().animate({'left': 0, "opacity": 1});

    });
    var count=0;
    var oSlider=$('.slider');
    var aS=$(".slider li");
    aS.hover(function () {
        clearInterval(timer);
        count=$(this).index()+1;
    },function(){
        timer = setInterval(time,1000);
    });
    aS.hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    },function () {
        $(this).removeClass('active');
    });

    function time() {
        aS.eq(count).addClass('active').siblings().removeClass('active');
        count++;
        if (count>5){
            count=0
        }
    };
    var timer=setInterval(time,1000);

    $('.back').click(function () {
        $(document).scrollTop(0);
    })

    var oPhone=$(".float .rightPhone .p");
    var oG=$(".float .copy .btn2");
    var oG1=$(".float .watch .bt");
    var wei=$(".float .rightW .wei");
    $('.float .rightPhone').click(function (ev) {
        //ev.cancelBubble=true;
        ev.stopPropagation();
    });
    $('.float .rightW').click(function(ev){
        ev.stopPropagation();
    })
    oPhone.click(function () {

        $(".float .rightPhone .copy").fadeIn();
        $(".float .watch").fadeOut();
    });
    oG.click(function(){
        $(".float .rightPhone .copy").fadeOut();
    });
    wei.click(function(){
        $(".float .rightPhone .copy").fadeOut();
        $(".float .rightW .watch").fadeIn();
    });
    oG1.click(function(){
        $(".float .rightW .watch").fadeOut();
    });
    $(document).click(function () {
        $(".float .rightPhone .copy").fadeOut();
        $(".float .rightW .watch").fadeOut();
    })
});