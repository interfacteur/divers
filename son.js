//use of sound HTML5 API - with .mp3 and .ogg

//Gaëtan Langhade, Interfacteur, 2015 march


/* to use :
	var sounds = { k: path.without.extension, k: etc.}
	globMeth.Sound.init(sounds)
	globMeth.sounds["k"].play() where "k" is the key of the sound path in object parameter sd
*/


var globMeth = {
	doNothing: function () { }
};


// $(function () {
	// "use strict";

/* Pseudo-class Sound */
	globMeth.Sound = globMeth.doNothing;
	(	(globMeth.audioCompat = (function () {
			"use strict";
			var audio = document.createElement("audio")
			return !! audio.canPlayType ?
				(	audio.canPlayType("audio/mpeg") ?
						".mp3" : audio.canPlayType('audio/ogg; codecs="vorbis"') ? ".ogg" : false	)
				: false;
		})())
	//fine for the class (with mp3 and ogg)
		&& (globMeth.Sound = function (srce) {
			"use strict";
			if (! this instanceof globMeth.Sound)
				throw new Error("Attention à l'instanciation");
			// this.srce = srce + globMeth.audioCompat;
			// this.ikey = p; //with one parameter more, keys of object of sounds path in globMeth.Sound.init(): new globMeth.Sound(sd[p], p) and globMeth.Sound = function (srce, p)
			this.audio = new Audio(srce + globMeth.audioCompat);
		})
		&& (globMeth.Sound.prototype.play = function () {
			"use strict";
			this.audio.play();
			return true;
		})
		&& (globMeth.Sound.prototype.pause = function () {
			"use strict";
			this.audio.pause();
			return true;
		})	)
	|| (globMeth.Sound.prototype.play = globMeth.returnTrue)
	&& (globMeth.Sound.prototype.pause = globMeth.returnTrue);
	globMeth.Sound.audioCompat = globMeth.audioCompat;
	delete globMeth.audioCompat;
	globMeth.Sound.init = function (sd) { //sd : object of sounds path without extension (mp3 and ogg)
		"use strict";
		globMeth.sounds = globMeth.sounds || [];
		for (var p in sd)
			globMeth.sounds[p] = new globMeth.Sound(sd[p]);
	}

// );