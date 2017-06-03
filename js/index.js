$(function() {
	//广告特效
	$("#ad").find("span").eq(0).on("click", function() {
		$("#ad").hide();
	});
	//banner轮播图
	var iIndex = 0;
	var oTimer = setInterval(move, 3000);
	$("#slider li").eq(0).show().siblings().hide();

	function move() {
		iIndex++;
		if(iIndex == $("#slider li").length) {
			iIndex = 0;
		}
		$("#slider li").eq(iIndex).fadeIn(300).siblings().fadeOut(300);
		$(".slider-nav span").eq(iIndex).addClass("active").siblings().removeClass("active");
	}
	$("#slider li").on("mousemove", function() {
		clearInterval(oTimer);
	})
	$("#slider li").on("mouseleave", function() {
		oTimer = setInterval(move, 3000);
	})
	$(".slider-nav span").bind('mouseover', function() {
		if(!$(this).hasClass('active')) {
			iIndex = $(this).index();
			$("#slider li").eq(iIndex).fadeIn(300).siblings().fadeOut(300);
			// 改变按钮的样式
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
	//小轮播图 
	var Index = 0;
	var Timer = setInterval(move1, 3000);
	$(".min-slider li").eq(0).show().siblings().hide();

	function move1() {
		Index++;
		if(Index == $(".min-slider li").length) {
			Index = 0;
		}
		$(".min-slider li").eq(Index).fadeIn(300).siblings().fadeOut(300);
		$(".min-slider-nav span").eq(Index).addClass("active").siblings().removeClass("active");
	}
	$(".min-slider li").on("mousemove", function() {
		clearInterval(Timer);
	})
	$(".min-slider li").on("mouseleave", function() {
		Timer = setInterval(move1, 3000);
	})
	$(".min-slider-nav span").bind('mouseover', function() {
		if(!$(this).hasClass('active')) {
			Index = $(this).index();
			$(".min-slider li").eq(Index).fadeIn(300).siblings().fadeOut(300);
			// 改变按钮的样式
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
	//左侧隐藏列表功能实现
//	$(".product-list li").each(function(i) {
//		$(".product-list li").eq(i).on("mouseout", function() {
//			var timeout = setTimeout(function() {
//				$(".list-hide").eq(i).hide();
//			}, 500);
//			$(".list-hide").eq(i).mousemove(function() {
//				clearTimeout(timeout);
//				$(".list-hide").eq(i).show();
//			})
//			$(".list-hide").eq(i).mouseout(function() {
//				$(".list-hide").eq(i).hide();
//			})
//		})
//	})
	$(".product-list li").each(function(i) {
		$(".product-list li").eq(i).on("mousemove", function() {
			$(".list-hide").hide();
			$(".list-hide").eq(i).show();
		})
		$(".product-list li").eq(i).on("mouseleave", function() {
			var timeout = setTimeout(function() {
				$(".list-hide").eq(i).hide();
			}, 500);
			$(".list-hide").eq(i).mousemove(function() {
				clearTimeout(timeout);
				$(".list-hide").eq(i).show();
			})
			$(".list-hide").eq(i).mouseout(function() {
				$(".list-hide").eq(i).hide();
			})
		})
	})
	//底部按钮点击轮播移动
	var i = 0;
	$(".right").click(function() {
		i++;
		if(i > 0) {
			$(".left").removeClass("active");
		}
		if(i >= 8) {
			i = 8;
			$(this).addClass("active");
		}
		$(".link-list").stop().animate({ left: -i * 158 });
	})
	$(".left").click(function() {
		i--;
		if(i <= 0) {
			i = 0;
			$(this).addClass("active");
		}
		if(i < 8) {
			$(".right").removeClass("active");
		}
		$(".link-list").stop().animate({ left: -i * 158 });
	})
	//点击按钮轮播移动 ！important封装轮播图
	var j = 0;
	console.log($(".btn-left"));
	$(".btn-right").each(function(index){
		$(".btn-right").eq(index).click(function() {
		j++;
		if(j <= 0) {
			j = 0;
		}
		if(j == 1) {
			$(".slider-recommend").eq(index).stop().animate({ "margin-left": "-1090" });
		}
		if(j == 2) {
			$(".slider-recommend").eq(index).stop().animate({ "margin-left": "-1417" });
			$(this).addClass("active");
		}
		if(j > 0) {
			$(".btn-left").eq(index).removeClass("active");
		}
	})
	$(".btn-left").eq(index).click(function() {
		if(j > 2) {
			j = 2;
		}
		j--;
		if(j == 0) {
			$(".slider-recommend").eq(index).stop().animate({ "margin-left": "0" });
			$(this).addClass("active");
		}
		if(j < 2) {
			$(".btn-right").eq(index).removeClass("active");
		}
		if(j == 1) {
			$(".slider-recommend").eq(index).stop().animate({ "margin-left": "-218" });
		}
	})
	})
	//回到顶部
	$(".top").click(function(){
		$("body,html").animate({ scrollTop: 0 }, 500);
	})
	//siderbar隐藏显示
	$(".help").mouseover(function(){
		$(".feedback").show(100);
		$(".service").show(150);
	})
	$(".help").mouseleave(function(){
		var t=setTimeout(function(){
			$(".feedback").hide();
			$(".service").hide();
		},300)
		$(".feedback").mousemove(function(){
			clearTimeout(t);
		})
	})
	$(".feedback").mouseleave(function(){
			var t=setTimeout(function(){
			$(".feedback").hide();
			$(".service").hide();
		},500)
			$(".service").mousemove(function(){
			clearTimeout(t);
		})
		})
		$(".service").mouseleave(function(){
			var t=setTimeout(function(){
			$(".feedback").hide();
			$(".service").hide();
		},500)
			$(".feedback").mousemove(function(){
			clearTimeout(t);
		})
		})
	
})
//header部分input框原生js事件
//	var oInput = document.getElementsByClassName("text")[0],
//		oKeyword = document.getElementsByClassName("keyword")[0];
//		console.log(oInput);
//	oInput.onfocus = function() {
//		console.log("aa");
//		oKeyword.style.display = "none";
//	}
//	oInput.onblur = function() {
//		oKeyword.style.display = "block";
//	}
//	//新闻公告的轮播图
//	var oSlidernews = document.getElementsByClassName("slider-news")[0];
//	var aLi = oSlidernews.getElementsByTagName("li");
//	oSlidernews.style.height = aLi.length * 48 + "px";
//	var i = 0;
//	var oTimer = setInterval(function() {
//		i++;
//		startMove(oSlidernews, { "margin-top": -48 * i })
//
//		if(i == aLi.length - 1) {
//			oSlidernews.style.top = 0;
//			//startMove(oSlidernews,{"margin-top":-48})
//			i = 0;
//		}
//	}, 2000);


function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn) { //json对象存的是运动物体（对象）的样式属性和目标值 fn称为回调函数
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flag = true; //看到此定义时，先忽略，具体为什么要定义flag，参考下边的说明
		//px,透明度（注意区分透明度的处理方式，opacity和filter兼容以及取值问题）
		for(var attr in json) { //attr对应的是json对象的属性
			//判断属性中是否有透明度的变化
			if(attr == "opacity") {
				// *100 会有误差 0000007 之类的 所以要用 Math.round() 会四舍五入
				var iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				//取得运动物体当前的属性值，parseInt()只取值，不带单位（比如px）
				var iCur = parseInt(getStyle(obj, attr));
			}
			//取得运动物体样式的一个终值,即目标值，通过对象取属性值[]的语法来获取，
			var iTarget = json[attr];
			//求缓冲运动的速率
			var iSpeed = (iTarget - iCur) / 8;
			//iSpeed有正负，注意取整问题，正值向上取整，因为运动对象的属性是无限接近目标值，如果向下取整的话，着iSpeed为小数时，直接变成0，没法到达目标值
			//负值向下取整
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			//此时让当前对象相应的属性发生改变，变化的速率就是iSpeed，还要考虑透明度的问题
			if(attr == "opacity") {
				obj.style.opacity = (iCur + iSpeed) / 100;

				obj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
			} else {
				obj.style[attr] = iCur + iSpeed + "px";
			}
			//正常来讲，当当前值和目标值相等时要清除定时器，但是此时可能设计多个属性值同时发生变化
			//如果其中某一个属性值先达到目标值，直接清除，其他属性值没法再发生变化
			//考虑使用一个公共变量去相应各个属性值的变化 定义一个flag
			//只要没有达到目标值，就让flag值为flase，此时不清除定时器
			if(iCur != iTarget) {
				flag = false;
			}

		}
		//所有都到达了目标值
		if(flag) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}

		}

	}, 30)
}