
//活动日历
function calendar(){
	//获取当前日期
	var d = new Date();
	var day = d.getDay();
	var t = new Date().getTime();
	var jQuerycalendarContent = jQuery('#calendar > .calendar_content > ul');
	var time = d.getFullYear() + '.' + toDouble(d.getMonth() + 1) + '.' + toDouble(d.getDate());
	jQuery('#day').html(time);
	//获取当前活动内容
	jQuerycalendarContent.eq(day).show();
	//获取活动信息
	jQuery('#calendar > .calendar_content li').hover(function(){
		jQuery(this).css('zIndex','9').find('.calendar_sub_content').show();
	},function(){
		jQuery(this).css('zIndex','').find('.calendar_sub_content').hide();
	});
	jQuery('#calendar_btn_prev').click(function(){
		if(day > 0){
			jQuery('#day').html(dateSub());
			day -= 1;
			jQuerycalendarContent.hide().eq(day).show();
		}else{
			day = 6;
			jQuery('#day').html(dateSub());
			jQuerycalendarContent.hide().eq(day).show();
		}
	});
	jQuery('#calendar_btn_next').click(function(){
		if(day < 6){
			jQuery('#day').html(dateAdd());
			day += 1;
			jQuerycalendarContent.hide().eq(day).show();
		}else{
			day = 0;
			jQuery('#day').html(dateAdd());
			jQuerycalendarContent.hide().eq(day).show();
		}
	});
	function toDouble(count){
		if(count < 10){
			return '0'+ count;
		}else{
			return '' + count;
		}
	}
	function dateAdd(){
		var s, d, t2;
		t2 = 1000 * 3600 * 24;
		t += t2;
		d = new Date(t);
		s = d.getUTCFullYear() + ".";
		s += ("00"+(d.getUTCMonth()+1)).slice(-2) + ".";
		s += ("00"+d.getUTCDate()).slice(-2);
		return s;
	}
	function dateSub(){
		var s, d, t2;
		t2 = 1000 * 3600 * 24;
		t -= t2;
		d = new Date(t);
		s = d.getUTCFullYear() + ".";
		s += ("00"+(d.getUTCMonth()+1)).slice(-2) + ".";
		s += ("00"+d.getUTCDate()).slice(-2);
		return s;
	}
}
calendar();

//左侧版本信息
function poster2(){
	jQuery('#versionContent-w').find('a').each(function(i){
	jQuery('#versionContent').append('<li><a target="_blank" href="'+jQuery(this).attr('href')+'" title="'+jQuery(this).attr('title')+'">'+jQuery(this).attr('title')+'</a></li>')	;
	});
}
 jQuery(function(){
   poster2();
  //左侧版本下拉
	jQuery('#version_other').click(function(){
		jQuery('.version_content',this).slideDown(500);
	}).mouseleave(function(){
		_this = jQuery(this);
		timer2 = setTimeout(function(){
			_this.children('.version_content').slideUp(500);
		},100);
	});
	jQuery('#version_other > .version_content').hover(function(){
		clearTimeout(timer2);
	},function(){
		jQuery(this).slideUp(500);
	});
	jQuery(".top_box").mouseover(function(){
	 var _w = parseInt(jQuery(window).width());

	 jQuery(".menu").css("width",_w+'px').css("left",(-(_w-1100)/2)+'px');
	 jQuery(".menu").show();
    });
   jQuery(".top_box").mouseout(function(){
	  jQuery(".menu").hide();
   });
 })



 var urlLink1 = jQuery(".gg1").find("a").attr("href"),
	 txt1 = jQuery(".gg1").find("a").attr("title"),
	 alt1 = jQuery(".gg1").find("img").attr("alt");
	jQuery(".gg-title1").attr("href",urlLink1);
	jQuery(".gg-title1").find("h3").html(txt1);
	jQuery(".gg-title1").find("p").html(alt1);
 var urlLink2 = jQuery(".gg2").find("a").attr("href"),
	 txt2 = jQuery(".gg2").find("a").attr("title"),
	 alt2 = jQuery(".gg2").find("img").attr("alt");
	jQuery(".gg-title2").attr("href",urlLink2);
	jQuery(".gg-title2").find("h3").html(txt2);
	jQuery(".gg-title2").find("p").html(alt2);
 var urlLink3 = jQuery(".gg3").find("a").attr("href"),
	 txt3 = jQuery(".gg3").find("a").attr("title"),
	 alt3 = jQuery(".gg3").find("img").attr("alt");
	jQuery(".gg-title3").attr("href",urlLink3);
	jQuery(".gg-title3").find("h3").html(txt3);
	jQuery(".gg-title3").find("p").html(alt3);

  var urlLink4 = jQuery(".tt1-img").find("a").attr("href"),
	 txt4 = jQuery(".tt1-img").find("a").attr("title"),
	 alt4 = jQuery(".tt1-img").find("img").attr("alt");
	jQuery(".tt1-title").attr("href",urlLink4);
	jQuery(".tt1-title").find("h3").html(txt4);
	jQuery(".tt1-title").find("p").html(alt4);
 var urlLink5 = jQuery(".tt2-img1").find("a").attr("href"),
	 txt5 = jQuery(".tt2-img1").find("a").attr("title"),
	 alt5 = jQuery(".tt2-img1").find("img").attr("alt");
	jQuery(".tt2-title1").attr("href",urlLink5);
	jQuery(".tt2-title1").find("h3").html(txt5);
	jQuery(".tt2-title1").find("p").html(alt5);
 var urlLink6 = jQuery(".tt2-img2").find("a").attr("href"),
	 txt6 = jQuery(".tt2-img2").find("a").attr("title"),
	 alt6 = jQuery(".tt2-img2").find("img").attr("alt");
	jQuery(".tt2-title2").attr("href",urlLink6);
	jQuery(".tt2-title2").find("h3").html(txt6);
	jQuery(".tt2-title2").find("p").html(alt6);

 var m = jQuery(".jc-text").length;
 for(var i=0; i < m; i++){
	 //精彩推荐
	 jQuery(".single").eq(i).find(".checkr").attr("href",jQuery(".single").eq(i).find("a").eq(0).attr("href"));
	 jQuery(".jc-text").eq(i).find("a").attr("href",jQuery(".jc-img").eq(i).find("a").attr("href")).html(jQuery(".jc-img").eq(i).find("a").attr("title"));
	 //蜀山女侠
	 jQuery(".jc-text").eq(i).find("p").html(jQuery(".jc-img").eq(i).find("img").attr("alt"));

	 //list游戏资料
	 jQuery(".yx-btn").eq(i).find("h3").html(jQuery(".yx-img").eq(i).find("a").attr("title"));
	 jQuery(".yx-btn").eq(i).find("p").html(jQuery(".yx-img").eq(i).find("img").attr("alt"));
	 jQuery(".yx-btn").eq(i).find("a").attr("href",jQuery(".yx-img").eq(i).find("a").attr("href"));
 }

var w = jQuery(".slider li").length;
for(var i = 0; i < w; i++){
		jQuery(".slide-btn ul").append("<li class='"+(i==0 ? "hover" : "")+"'><a href='javascript:;'>"+jQuery(".slider li a").eq(i).attr("title")+"<\/a><\/li>");
}
jQuery(".slide-btn ul").find("li").css({"width":(620/w)+"px"});
jQuery(".slider ul").css({"width":w*100+"%"});
var timer="",
	index=0;

//banner切换
jQuery(".slide-btn ul li").each(function(i){
	jQuery(this).mouseover(function(){
		index = jQuery(this).index();
		jQuery(this).addClass("hover").siblings().removeClass("hover");
		jQuery(".slider ul").stop().animate({left:"-"+index*100+"%"},100);
		index++;
	})
});
jQuery(".slide-btn").mouseover(function(){
	window.clearInterval(timer);
})
jQuery(".slide-btn").mouseleave(function(){
	auto();
})

function auto(){
	window.clearInterval(timer);
	timer=setInterval(function(){
		if(index > (w-1)){
			index=0;
		}
		jQuery(".slide-btn ul li").eq(index).addClass("hover").siblings().removeClass("hover");
		jQuery(".slider ul").stop().animate({left:"-"+index*100+"%"},100);
		index++;
	},6000)
}
auto();






var w1 = jQuery(".slider1 li").length;
for(var i = 0; i < w1; i++){
		jQuery(".slide-btn1 ul").append("<li class='"+(i==0 ? "hover" : "")+"'><a href='javascript:;'>"+jQuery(".slider1 li a").eq(i).attr("title")+"<\/a><\/li>");
}
jQuery(".slide-btn1 ul").find("li").css({"width":(620/w1)+"px"});
jQuery(".slider1 ul").css({"width":w1*100+"%"});
var timer1="",
	index1=0;

//banner切换
jQuery(".slide-btn1 ul li").each(function(i){
	jQuery(this).mouseover(function(){
		index1 = jQuery(this).index();
		jQuery(this).addClass("hover").siblings().removeClass("hover");
		jQuery(".slider1 ul").stop().animate({left:"-"+index1*100+"%"},100);
		index1++;
	})
});
jQuery(".slide-btn1").mouseover(function(){
	window.clearInterval(timer1);
})
jQuery(".slide-btn1").mouseleave(function(){
	auto1();
})

function auto1(){
	window.clearInterval(timer1);
	timer1=setInterval(function(){
		if(index1 > (w1-1)){
			index1=0;
		}
		jQuery(".slide-btn1 ul li").eq(index1).addClass("hover").siblings().removeClass("hover");
		jQuery(".slider1 ul").stop().animate({left:"-"+index1*100+"%"},100);
		index1++;
	},6000)
}
auto1();
jQuery(".mid-slide_btn_top div").each(function(i){
	jQuery(this).click(function(){
		jQuery(this).addClass("hover").siblings().removeClass("hover");
		jQuery(".slider_box").eq(i).removeClass("hide").siblings(".slider_box").addClass("hide");
	})

})

//人物切换
	jQuery(".zy-btn ul li a").each(function(i) {
		jQuery(this).click(function() {
			jQuery(this).parent().addClass("hover").siblings().removeClass("hover");
			jQuery(".common_peo").eq(i).css("left", "-435px");
			jQuery(".common_peo").eq(i).siblings().stop().animate({
				left: '-435px'
			}, 400,function(){
				jQuery(".common_peo").eq(i).show().stop().animate({
					left: '27px'
				}, 500);
			});

			jQuery(".zyzs_wenzi_switch ul li").eq(i).css("right", "-195px");
			jQuery(".zyzs_wenzi_switch ul li").eq(i).siblings().stop().animate({
					right: '-195px'
			},300,function(){
				jQuery(".zyzs_wenzi_switch ul li").eq(i).show().stop().animate({
					right: '0'
				}, 400);
			});
		});
	});
	//男仙禽
	jQuery(".xq_famel").click(function() {
		jQuery(this).addClass("cur").siblings().removeClass("cur");
		jQuery(".xq_peo ul li").eq(1).stop().fadeIn().siblings().stop().fadeOut();
	});
	//女仙禽
	jQuery(".xq_womem").click(function() {
		jQuery(this).addClass("cur").siblings().removeClass("cur");
		jQuery(".xq_peo ul li").eq(0).stop().fadeIn().siblings().stop().fadeOut();
	});
	//男峨眉
	jQuery(".em_famel").click(function() {
		jQuery(this).addClass("cur").siblings().removeClass("cur");
		jQuery(".em_peo ul li").eq(1).stop().fadeIn().siblings().stop().fadeOut();
	});
	//女峨眉
	jQuery(".em_womem").click(function() {
		jQuery(this).addClass("cur").siblings().removeClass("cur");
		jQuery(".em_peo ul li").eq(0).stop().fadeIn().siblings().stop().fadeOut();
	});

//书签切换
jQuery(".picture li").each(function(i){
	jQuery(this).click(function(){
		jQuery(this).addClass("cur").siblings().removeClass("cur");
		jQuery(this).addClass("hover").siblings().removeClass("hover");
	})
})


//顶部新闻切换
jQuery(".news-btn li").each(function(i){
	jQuery(this).mouseover(function(){
	   jQuery(this).addClass("hover").siblings().removeClass("hover");
	   jQuery(".news-slide .news_con").eq(i).removeClass("hide").siblings(".news_con").addClass("hide");
	   
	});
 });

//左侧栏公众号
jQuery(".gzh a").hover(function(){
	jQuery(this).find("img").removeClass("hide");
})

//底部新闻切换
jQuery(".new-title li").each(function(i){
	jQuery(this).mouseover(function(){
	   jQuery(this).addClass("hover").siblings().removeClass("hover");
	   jQuery(".new-s").eq(i).removeClass("hide").siblings().addClass("hide");
	});
 });


//滚动
(function() {
    var clientHeight = jQuery(window).height();
    var jQueryanimation_list = jQuery('.section');

    function appear(obj){
        var rect = obj.getBoundingClientRect();
        return !!(rect.top < clientHeight && rect.bottom > 0);
    }

    function animation() {
        jQueryanimation_list.each(function() {
            if ( appear(this)  && !jQuery(this).hasClass('lwdh') ) {
                jQuery(this).addClass('lwdh')
            }
        })
    }

    animation();

    jQuery(window).scroll(function() {
        animation();
    });
})();



//讨论滚动
jQuery("#v_scroll").find("script").remove();
function gamePlay(){this.scroll({lh:55,speed:50,delay:1000,idx:'v_scroll'});};

gamePlay.prototype.scroll=function(opts){
	var lh = opts.lh;
	var speed = opts.speed;
	var delay = opts.delay;
	var box = document.getElementById(opts.idx);   
	var len = 0;
	var elems =  box.getElementsByTagName('li');
	var _l = box.getElementsByTagName('li').length; 
	for(len in elems){
		if(elems[len].className=="lang"){
			elems[len].style.paddingTop="0px";
			elems[len].style.height="165px";			
		}
	}
	var height = lh * _l;   
	var t = null;    
	var _t = null;
	var num = 0;   
	var flag = 0;   
	if(height <= lh){   
		return false;   
	}else{
		auto();	  
	}
	function delay_time(){
		if(num < delay){
			_t = setInterval(function(){
				num++;
				if(num == delay/1000){
					window.clearInterval(_t);
					flag = 0;
					if(box.scrollTop >= height-lh*3){
						box.scrollTop = 0;
					}
					auto();
				}
			},1000);
		}
	}
	function auto(){
		if(flag == 0){  
			var i = 0;  
			var s = setInterval(function(){   
				i++;    
				if(i == delay/1000){     
					t = setInterval(function(){  
					box.scrollTop += 1;   //注意此处如果行高是奇数，最好应该修改为+1;
						if(box.scrollTop % lh == 0){   
							window.clearInterval(t);
							flag = 1;
							num = 0;
							delay_time();
						}
					},speed);
				}
			},1000); 
		}
	}

}

new gamePlay();