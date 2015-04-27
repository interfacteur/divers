/* Gaëtan Langhade, Interfacteur, mars-avril 2015

http://www.equatorium.net/e1/tests/son-routine.html

jouer des sons en mode play vs stop
	.mp3 et .ogg
	avec gestion tactile et prise en compte spécificités Apple cf. http://www.ibm.com/developerworks/library/wa-ioshtml5/
	sans les erreurs dues aux output de certains PC (win c/o Ludwik)
suppose jQuery
*/


var globMeth = {
	doNothing: function () { }
};


// $(function () {
	// "use strict";

//Fonction constructeur pour jouer les sons en mode play vs stop ----------------------------------------------------------------------------
	globMeth.Sound = function () {
		"use strict";
		if (! this instanceof globMeth.Sound)
			throw new Error("Attention à l'instanciation");
		this.audio = true;
	};
	(	(globMeth.audioCompat = (function () {
			"use strict";
			var audio = document.createElement("audio");
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
			this.readable = ! navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/) ? false : true;
			this.readdom();
		})
		&& (globMeth.Sound.prototype.stall = globMeth.doNothing)
		&& (globMeth.Sound.init = -1)
		&& (globMeth.Sound.prototype.readdom = function () {
			"use strict";
			$(this.audio).data("obj", this)
			.on({
				canplay: function () {
					"use strict";
					$(this).data("obj").readable = true; //to do : lancer play() avant et après ?
				},
				play: function () {
					"use strict";
					$(this).off("play");
					if (globMeth.Sound.init === true)
						return;
					setTimeout(function () {
						"use strict";
						if (globMeth.Sound.init === true)
							return;
						globMeth.Sound.init = true;
						globMeth.Sound.prototype.stall = function (n) {
							"use strict";
							this.readable === true
							&& (this.audio.currentTime = n);
						};
					}, 50); //to do : comment ajuster cette durée ?
				},
				error: function () {
					"use strict";
					$(this).data("obj").readable = false;
		}	});	})
		&& (globMeth.Sound.prototype.turnon = function () {
			"use strict";
			if (this.key === globMeth.Sound.active)
				return;
			this.readable === true
			&& (globMeth.Sound.active = this.key)
			&& this.audio.play();
			return this;
		})
		&& (globMeth.Sound.prototype.turnoff = function () {
			"use strict";
			if (globMeth.Sound.active !== false && this.readable === true) {
				! this.audio.paused
				&& this.audio.pause();
				globMeth.Sound.active = false;
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

	globMeth.Sound.init = function (sd) {
		"use strict";
		globMeth.sounds = globMeth.sounds || [];
		for (var p in sd)
			globMeth.sounds[p] = new globMeth.Sound(sd[p], p);
	}

	globMeth.Sound.active = false;



// );