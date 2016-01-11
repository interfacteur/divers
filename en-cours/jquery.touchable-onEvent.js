/*
Interfacteur

plugin pour simplifier le trigger d'un événement "mouse" par un événement "touch"

test sur http://www.equatorium.net/e1/+tests/touchable-onEvent.html
*/


$;"use strict";

$.fn.touchable = function (me, te) { //me: object of mouse events; te: array of touch events
	"use strict";

	var that;

	if ($.fn.touchable.init === false)
		return;

	$.fn.touchable.first = $.fn.touchable.first || $("body").on("mousemove.first", function (ze) {
			"use strict";
			$("body").off("mousemove.first");
			$.fn.touchable.init = false;
	});

	(	($.fn.touchable.init === true)
		|| (
				("ontouchstart" in window || "onmsgesturechange" in window)
				&& ($.fn.touchable.init = true)
				&& ($.fn.touchable.touchevents = {
						touchstart: "mouseover",
						touchmove: "mousemove",
						touchend: "mouseout",
						touchleave: "mouseout"
					})
				&& ($.fn.treatevents = function (ze, clbck) {
					"use strict";
					var ore = ze,
						tactTouch = typeof ze.pageX == "number" && (ze.pageX > 0 || ze.pageY > 0) ? ze
						: typeof ze.touches[0].pageX == "number" && (ze.touches[0].pageX > 0 || ze.touches[0].pageY > 0) ? ze.touches[0]
						: typeof ze.changedTouches[0].pageX == "number" && (ze.changedTouches[0].pageX > 0 || ze.changedTouches[0].pageY > 0) ? ze.changedTouches[0] : null;

					if (tactTouch === null)
						return;

					if (tactTouch !== ze) {
						ore = {};
						for (var p in ze)
							ore[p] = ze[p];
						ore.pageX = tactTouch.pageX;
						ore.pageY = tactTouch.pageY;
					}
					clbck.call(this, ore);
	})	)	)
	&& this.each(function () {
		"use strict";
		var that = this;
		te.forEach(function (val) {
			"use strict";
			that.addEventListener(val, function (ze) {
				"use strict";
				ze.preventDefault();
				// ze.stopPropagation();
				$(this).treatevents(ze, me[$.fn.touchable.touchevents[ze.type]]);
			}, false);
});	});	}

$.fn.onevent = function (me, te) { //me: object of mouse events; te: array of touch events
	"use stict";
	this.each(function () {
		"use strict";
		$(this).on(me)
		.touchable(me, te);
});	}
