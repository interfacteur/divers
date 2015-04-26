(function($){
	"use strict";
	$(document).ready(function(){
		if ($(".gallery").length == 0)
			return;
		$("article").on( //delegated events vs direct like $("article a").on({ "click": function(ze) {}	});
			"click",
			"a",
			function(ze) {
				ze.preventDefault();
				var $t = $(this),
					o = $t.data("o"),
					wid = window.open(
						$t.data("target") + "&opus=" + o,
						"id" + o.split(".")[0],
						"width=" + $t.data("w") + ",height=" + (parseInt($t.data("h")) + 80)
				);
				wid.focus();
		}	);
		$("#top > section > a").on({ //via PHP...
			"click" : function(ze) {
				ze.preventDefault();
				$(".view-gal").attr("action",$(this).attr("href")).get(0).submit();
		}	});
});	})(jQuery);
