//use of sound HTML5 API - with .mp3 and .ogg

//Gaëtan Langhade, Interfacteur, 2015 march



var globMeth = {
	doNothing: function () { }
};


// $(function () {
	// "use strict";

//Pseudo-class Sound ----------------------------------------------------------------------------
	commonLAg.Sound = function () {
		"use strict";
		if (! this instanceof commonLAg.Sound)
			throw new Error("Attention à l'instanciation");
		this.audio = true;
	};
	(	(commonLAg.audioCompat = (function () {
			"use strict";
			var audio = document.createElement("audio")
			return !! audio.canPlayType ?
				(	audio.canPlayType("audio/mpeg") ?
						".mp3" : audio.canPlayType('audio/ogg; codecs="vorbis"') ? ".ogg" : false	)
				: false;
		})())
		&& (commonLAg.Sound = function (srce, key) {
			"use strict";
			if (! this instanceof commonLAg.Sound)
				throw new Error("Attention à l'instanciation");
			this.key = key;
			this.srce = srce + commonLAg.Sound.audioCompat;
			this.audio = new Audio(this.srce);
			this.readable = false;
			this.stall = commonLAg.doNothing;
			this.readdom();
		})
		&& (commonLAg.Sound.prototype.readdom = function () {
			"use strict";
			$(this.audio).data("obj", this)
			.on({
				canplay: function () {
					"use strict";
					$(this).data("obj").readable = true;
				},
				play: function () {
					"use strict";
					var t = this,
						tob = $(t).data("obj");
					$(t).off("play");
					setTimeout(function () {
						"use strict";
						(tob.readable === true)
						&& (tob.stall = function (n) {
							"use strict";
							t.currentTime = n;
						});
					}, 750); //to do: how to adjust this duration?
				},
				error: function () {
					"use strict";
					$(this).data("obj").readable = false;
		}	});	})
		&& (commonLAg.Sound.prototype.turnon = function () {
			"use strict";
			this.readable === true
			&& this.audio.play();
			return this;
		})
		&& (commonLAg.Sound.prototype.turnoff = function () {
			"use strict";
			if (this.readable === true) {
				! this.audio.paused
				&& this.audio.pause();
				this.stall(0);
			}
			return this;
		})	)
	|| (commonLAg.Sound.prototype.turnon = function () {
		"use strict";
		return this;
	})
	&& (commonLAg.Sound.prototype.turnoff = commonLAg.Sound.prototype.turnon);
	commonLAg.Sound.audioCompat = commonLAg.audioCompat;
	delete commonLAg.audioCompat;
	commonLAg.Sound.init = function (sd) { //sd : object of sounds path without extension (mp3 and ogg)
		"use strict";
		commonLAg.sounds = commonLAg.sounds || [];
		for (var p in sd)
			commonLAg.sounds[p] = new commonLAg.Sound(sd[p], p);
	}
// );