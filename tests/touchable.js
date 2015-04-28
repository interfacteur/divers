//http://www.equatorium.net/e1/tests/

/*
simplifier le trigger d'un événement "mouse" par un événement "touch"
*/

"use strict";

//FONCTION GLOBALE :
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
						$(this).trigger(touchable.touchevents[ze.type], [ze]);
					})
			)	)
	&& (that = $(el).get(0))
	&& te.forEach(function (val) {
		"use strict";
		that.addEventListener(val, touchable.treatevents, false);
});	}

//Exemple :
/* $(function () {
	"use strict";
	var $retour1 = $("#retour1"),
		$retour2 = $("#retour2"),
		$retour3 = $("#retour3");

	touchable($("#zone").on({
		mouseover: function (ze) {
			"use strict";
			$retour1.text(ze.type + " : " +  new Date());
		},
		mousemove: function (ze) {
			"use strict";
			$retour2.text(ze.type + " : " +  new Date());
		},
		mouseout: function (ze) {
			"use strict";
			$retour3.text(ze.type + " : " +  new Date());
	}	}), ["touchstart", "touchmove", "touchend", "touchleave"]);
}); */


//PLUGIN JQUERY :
$.fn.touchable = function (te) { //te : array of touch events
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
				&& ($.fn.touchable.treatevents = function (ze) {
						"use strict";
						ze.preventDefault();
						$(this).trigger($.fn.touchable.touchevents[ze.type], [ze]);
					})
			)	)
	&& this.each(function () {
		"use strict";
		var that = this;
		te.forEach(function (val) {
			"use strict";
			that.addEventListener(val, $.fn.touchable.treatevents, false);
});	});	}

//Exemple :
/* $(function () {
	"use strict";
	var $retour1 = $("#retour1"),
		$retour2 = $("#retour2"),
		$retour3 = $("#retour3");

	$("#zone").on({ //ou $("#zone1, #zone2, #zone3")
		mouseover: function (ze) {
			"use strict";
			$retour1.text(ze.type + " : " +  new Date());
		},
		mousemove: function (ze) {
			"use strict";
			$retour2.text(ze.type + " : " +  new Date());
		},
		mouseout: function (ze) {
			"use strict";
			$retour3.text(ze.type + " : " +  new Date());
	}	})
	.touchable(["touchstart", "touchmove", "touchend", "touchleave"]);
}); */


