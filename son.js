//use of sound HTML5 API - with .mp3 and .ogg

//Gaëtan Langhade, Interfacteur, 2015 march



var globMeth = {
	doNothing: function () { }
};


// $(function () {
	// "use strict";

//Pseudo-class Sound ----------------------------------------------------------------------------
	globMeth.Sound = function () {
		"use strict";
		if (! this instanceof globMeth.Sound)
			throw new Error("Attention à l'instanciation");
		this.audio = true;
	};
	(	(globMeth.audioCompat = (function () {
			"use strict";
			var audio = document.createElement("audio")
			return !! audio.canPlayType ?
				(	audio.canPlayType("audio/mpeg") ?
						".mp3" : audio.canPlayType('audio/ogg; codecs="vorbis"') ? ".ogg" : false	)
				: false;
		})())
		&& (globMeth.Sound = function (srce, key) {
			"use strict";
			if (! this instanceof globMeth.Sound)
				throw new Error("Attention à l'instanciation");
			this.key = key;
			this.srce = srce + globMeth.Sound.audioCompat;
			this.audio = new Audio(this.srce);
			this.readable = false;
			this.stall = globMeth.doNothing;
			this.readdom();
		})
		&& (globMeth.Sound.prototype.readdom = function () {
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
		&& (globMeth.Sound.prototype.turnon = function () {
			"use strict";
			this.readable === true
			&& this.audio.play();
			return this;
		})
		&& (globMeth.Sound.prototype.turnoff = function () {
			"use strict";
			if (this.readable === true) {
				! this.audio.paused
				&& this.audio.pause();
				this.stall(0);
			}
			return this;
		})	)
	|| (globMeth.Sound.prototype.turnon = function () {
		"use strict";
		return this;
	})
	&& (globMeth.Sound.prototype.turnoff = globMeth.Sound.prototype.turnon);
	globMeth.Sound.audioCompat = globMeth.audioCompat;
	delete globMeth.audioCompat;
	globMeth.Sound.init = function (sd) { //sd : object of sounds path without extension (mp3 and ogg)
		"use strict";
		globMeth.sounds = globMeth.sounds || [];
		for (var p in sd)
			globMeth.sounds[p] = new globMeth.Sound(sd[p], p);
	}
// );