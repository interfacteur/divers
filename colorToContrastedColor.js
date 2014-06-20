
/**
 * Provide contrasted values of a RGB color via its HLS values in order to extract complemtary colors
 *
 * RGB to HSL and HSL to RGB adapted from http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 * wich gives all conversion formulas
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255]
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The RGB representation of a contrasted value of the original RGB color, and the WCAG 2 contrast ratio
**/

var toContrast = function(origR,origG,origB) {
	"use strict";

	/* rgb to h (s and l are declined in an array) */
	var r = origR / 255,
		g = origG / 255,
		b = origB / 255,
		max = Math.max(r, g, b),
		min = Math.min(r, g, b),
		h, s, l,
		contraste = [0];

	if(max == min) h = 0; // achromatic
	else{
		var d = max - min;
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	//roue chromatique : les complementaires (http://scrap2sam.canalblog.com/archives/2010/04/18/17610481.html)
	var H = [(h + .25) % 1,(h + .5) % 1,(h + .75) % 1]; 
	H.forEach(function(zv1) {
		sl.forEach(function(zv2) {

			/* hsl to rgb */
			h = zv1, s = zv2[0], l = zv2[1];
			if(s == 0) r = g = b = l; // achromatic
			else{
				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1/3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1/3);
			}

			/* le contraste le plus accentue */
			var contrastant = contrasteEvaluer(origR,origG,origB,r * 255,g * 255,b * 255);
			if (contraste[0] < contrastant) contraste = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255), contrastant];
	});	});

	return contraste;
}
//(from http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c)
function hue2rgb(p, q, t) {
	if(t < 0) t += 1;
	if(t > 1) t -= 1;
	if(t < 1/6) return p + (q - p) * 6 * t;
	if(t < 1/2) return q;
	if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	return p;
}

var sl = [];
[0,.125,.25,.375,.5,.625,.75,.875,1].forEach(function(zv1) {
	[.125,.25,.375,.5,.625,.75,.875].forEach(function(zv2) {
		sl.push([zv1,zv2]);
});	});

//calculer les contrastes
//http://www.w3.org/TR/WCAG20-TECHS/G17.html
//http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
function hexaTraiter(n) {
	n /= 255;
	return n < 0.03928 ? n / 12.92 : Math.pow(((n + 0.055) / 1.055), 2.4);
}
function luminanceCalculer(r,g,b) {
	return 0.2126 * hexaTraiter(r) + 0.7152 * hexaTraiter(g) + 0.0722 * hexaTraiter(b);
}
function contrasteEvaluer(r,g,b,R,G,B) {
	var L1 = luminanceCalculer(r,g,b),
		L2 = luminanceCalculer(R,G,B);
	return L1 > L2 ? (L1 + 0.05) / (L2 + 0.05) : (L2 + 0.05) / (L1 + 0.05);
}
 
