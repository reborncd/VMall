$(function() {
	$("input").each(function(i) {
		$("input").eq(i).on("blur", function() {
			if($("input").eq(i).val() == "") {
				$("span").eq(i).show();
			} else {
				$("span").eq(i).hide();
			}
		})
		$("input").eq(2).on("input", function() {
			if($(this).val()!="ckw2") {
				$("span").eq(2).show();
			} else {
				$("span").eq(2).hide();
			}
		})
	})
})