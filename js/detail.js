$(function() {
	$(".product-list li").each(function(i) {
		$(".product-list li").eq(i).on("mousemove", function() {
			$(".list-hide").hide();
			$(".list-hide").eq(i).show();
		})
	})
	$(".product-list li").each(function(i) {
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
	$(".nav-product").find("h2").mouseover(function() {
		$(".product-list").show();
	})
	$(".nav-product").mouseleave(function() {
		$(".product-list").hide();
	})
})
window.onload = function() {
	var oInput = document.getElementsByClassName("text")[0],
		oKeyword = document.getElementsByClassName("keyword")[0];
	oInput.onfocus = function() {
		oKeyword.style.display = "none";
	}
	oInput.onblur = function() {
		oKeyword.style.display = "block";
	}
	function $(id) {
		return document.getElementById(id);
	}

	function getOffset(obj) {
		var oOffset = { left: 0, top: 0 };
		do {
			oOffset.left += obj.offsetLeft;
			oOffset.top += obj.offsetTop;

			obj = obj.parentNode;
		} while (obj && obj !== document);

		return oOffset;
	}
	var oBox = $("box");
	var oRightBox = $("right-box");
	var oTopBox = $("top-box");
	var oBottomBox = $("bottom-box");
	var oBigImg = $("big-img");
	var oMiddleImg = $("middle-img");
	var aImg = Array.from(oBottomBox.getElementsByTagName('img'));
	var oShadow = $("shadow");

	aImg.forEach(function(v) {
		v.onmouseenter = function() {
			aImg.forEach(function(m) {
				m.className = '';
			});
			this.className = 'active';
			oMiddleImg.src = this.src;
			oBigImg.src = this.src;
		}
	})
	oTopBox.onmousemove = function(ev) {
		oShadow.style.display = "block";
		oRightBox.style.display = "block";
		var ev = ev || window.event;
		var oTopBoxOffset = getOffset(oTopBox);
		var iL = ev.clientX - oShadow.offsetWidth / 2 - oTopBoxOffset.left;
		var iT = ev.clientY - oShadow.offsetHeight / 2 - oTopBoxOffset.top;
		if(iL <= 0) {
			iL = 0;
		}
		if(iL >= oTopBox.offsetWidth - oShadow.offsetWidth) {
			iL = oTopBox.offsetWidth - oShadow.offsetWidth;
		}
		if(iT <= 0) {
			iT = 0;
		}
		if(iT >= oTopBox.offsetHeight - oShadow.offsetHeight) {
			iT = oTopBox.offsetHeight - oShadow.offsetHeight;
		}
		oShadow.style.left = iL + 'px';
		oShadow.style.top = iT + 'px';

		var iBigL = -iL * oBigImg.offsetWidth / oTopBox.offsetWidth;
		var iBigT = -iT * oBigImg.offsetHeight / oTopBox.offsetHeight;

		oBigImg.style.left = iBigL + 'px';
		oBigImg.style.top = iBigT + 'px';
	}

	oTopBox.onmouseleave = function() {
		oShadow.style.display = "none";
		oRightBox.style.display = "none";
	}
}