var commonLAg = {
	doNothing: function () { }
};

// $(function () {
	// "use strict";

	var audioCompat;

//Pseudo-class Sound ----------------------------------------------------------------------------
	//to use : commonLAg.sounds["k"].play()
	commonLAg.Sound = commonLAg.doNothing;
	(	(audioCompat = (function () {
			"use strict";
			var audio = document.createElement("audio")
			return !! audio.canPlayType ?
				(	audio.canPlayType("audio/mpeg") ?
						".mp3" : audio.canPlayType('audio/ogg; codecs="vorbis"') ? ".ogg" : false	)
				: false;
		})())
	//ok for the class (with mp3 and ogg)
		&& (commonLAg.Sound = function (source) {
			"use strict";
			if (! this instanceof commonLAg.Sound)
				throw new Error("Attention à l'instanciation");
			// this.source = source + commonLAg.Sound.format();
			this.audio = new Audio(source + audioCompat);
		})
		&& (commonLAg.Sound.prototype.play = function () {
			"use strict";
			this.audio.play();
			return true;
		})
		&& (commonLAg.Sound.prototype.pause = function () {
			"use strict";
			this.audio.pause();
			return true;
		})	)
	|| (commonLAg.Sound.prototype.play = commonLAg.returnTrue)
	&& (commonLAg.Sound.prototype.pause = commonLAg.returnTrue);
	commonLAg.Sound.audioCompat = audioCompat;
	commonLAg.Sound.init = function (sd) { //sd : object of sounds path without extension (mp3 and ogg)
		"use strict";
		commonLAg.sounds = commonLAg.sounds || [];
		for (var p in sd)
			commonLAg.sounds[p] = new commonLAg.Sound(sd[p]);
//to use :
	// var sounds = { k: path.without.extension, k: etc.}
	// commonLAg.Sound.init(sounds)
	// commonLAg.sounds["k"].play() where "k" is the key of the sound path in object parameter sd
	}

// );