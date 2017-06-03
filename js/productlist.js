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
