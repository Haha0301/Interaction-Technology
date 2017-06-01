$(function () {
	//添加类名
	function addName(selector,name) {
		$(selector).mouseenter(function(){
			$(selector).addClass(name);
		});
		$(selector).mouseleave(function () {
			$(selector).removeClass(name);
		})
	};
	//service中的动画
	addName('.experience img','animated swing');
	addName('.design img','animated swing');
	addName('.brand img','animated swing');
	addName('.num img','animated swing');
	addName('.dynamic .down','animated flash');

	//index点击向下走
    $('.dynamic .down').click(function(){
       	$(document).scrollTop(500);
    });


	//点击右边菜单
	function menu(selector1,selector2,selector3) {
		$(selector1).click(function(){

			$(selector2).css('display','block');
		});
		$(selector3).click(function (evt) {
			evt.stopPropagation();
			$(selector2).css('display','none');
		});
	}
	menu('.phone','.phone dl','');
	menu('.weixin','.weixin dl','');
	menu('','.phone dl','.phone dl .tell-close');
	menu('','.weixin dl','.weixin dl .tell-close');

	
	// achievement中的选项卡
	function tab(selector1,selector2) {
		$(selector1).click(function(){
			$(selector1).removeClass('active');
			$(selector2).removeClass('active');
			$(this).addClass('active');
			$(selector2).eq($(this).index()).addClass('active');
		});
	}
	tab('.wheel .title a','.wheel ul')


	//index轮播图
	var count = 0;
	function next() {	
		count++;
		if(count == $('.next a').length){
			$('.next').animate({left:(count-1)*(-1349)},function () {
				$('.next').css('left',0);
				count = 0;
			});
		}else{
			$('.next').animate({left:(count)*(-1349)});
		}
	}
	var tid = setInterval(next,1000);
	next();
	$('#project').mouseenter(function () {
		clearInterval(tid);
	});
	$('#project').mouseleave(function () {
		tid = setInterval(next,1000);
		next();
	});


	//改变top值
	function show(selector,t) {
		$(selector).stop().animate({'top':t,'opacity':1},1000,'linear');
	}
	
	
	//service中改变线高度
	function show2(selector) {
		$(selector).stop().animate({'height':'173px'},1000,'linear');
		
	}

	//index图片加载
	var aImg = $('#partner ul li');	
	var aLi = $('#service ul li');
	var n1 = 500;
	var n2 = 500;
	var toggle = true;
	var toggle2 = true;
	
	function run() {
		toggle = false;
		for (var i = 0; i < aImg.length; i++){
			aImg.eq(i).stop().animate({'top':0,'opacity':1},n1+=50,'linear');
		}
	}
	
	function run2() {
		toggle2 = false;
		for (var i = 0; i < aLi.length; i++){
			aLi.eq(i).stop().animate({'top':0,'opacity':1},n2+=500,'linear');
		}
	}

	//回到顶部
	$('.top').click(function(){
       	$(document).scrollTop(0);
    });


	//滚轮滚动的距离
	var sTop = $(document).scrollTop(); 
	//滚动监听
	$(window).scroll(function() {
		var sTop = $(document).scrollTop(); 
		
		//右边导航栏
		if (sTop > 100) {
            $('#share').css({'right': 50,'opacity': 1});
        } else {
        	$('#share').css({'right': -36,'opacity': 0});
		}

		//头部标签及index中图片改变
		if (sTop > 50) {
            $('header').css('background-color','rgba(2,20,32,0.8)');
            $('.index-banner').css('height','580px');
            $('.dynamic .down').css('top','500px');
        } else {
        	$('header').css('background-color','rgba(2,20,32,0.2)');
        	$('.index-banner').css('height','661px');
        	$('.dynamic .down').css('top','570px');
        }

        //index图片加载
        if (sTop > 1800) {
        	if(toggle){
        		run();
        	}
        }
        if (sTop > 500) {
        	if(toggle2){
        		run2();
        	}
        }

        //service中的内容
        if (sTop > 300) {
			show('.context dl',210);
        }
        if(sTop > 700) {
         	//service中的线
			show('.flow-top',0);
			show('.flow-bottom',240);
			show2('.line-top b');
			show2('.line-bottom b');
        }

	})
	if (sTop > 1800) {
       	if(toggle){
        	run();
        }
    }
    if (sTop > 500) {
       	if(toggle2){
        	run2();
        }
    }
    if (sTop > 300) {
		show('.context dl',210);
    }
    if(sTop > 700) {
        //service中的线
		show('.flow-top',0);
		show('.flow-bottom',240);
		show2('.line-top b');
		show2('.line-bottom b');
    }

    //form js
    var oBtn=$('#h-box .btn');
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
});	
