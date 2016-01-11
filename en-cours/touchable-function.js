/*
Interfacteur

simplifier le trigger d'un événement "mouse" par un événement "touch"

https://github.com/interfacteur/divers/blob/master/en-cours/touchable-function.js

test sur http://www.equatorium.net/e1/+tests/touchable-function.html

	test qui était en mode invisible au 160111 - pourquoi ?
*/


;"use strict";

function touchable (el, te) { //el : element or $(element) ; te : array of touch events
	"use strict";
	var that;
	if (touchable.init === false)
		return;
	touchable.first = touchable.first || $("body").on("mousemove.first", function (ze) {
			"use strict";
			$("body").off("mousemove.first");
			touchable.init = false;
	});
	(	(touchable.init === true)
		|| (
				("ontouchstart" in window || "onmsgesturechange" in window)
				&& (touchable.init = true)
				&& (touchable.touchevents = {
						touchstart: "mouseover",
						touchmove: "mousemove",
						touchend: "mouseout",
						touchleave: "mouseout"
					})
				&& (touchable.treatevents = function (ze) {
						"use strict";
						ze.preventDefault();
						ze.stopPropagation();
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
						$(this).trigger(touchable.touchevents[ze.type], [ore]);
	})	)	)
	&& (that = $(el).get(0))
	&& te.forEach(function (val) {
		"use strict";
		that.addEventListener(val, touchable.treatevents, false);
});	}