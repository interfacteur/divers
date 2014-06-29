 /*
To find an enhaced contrast

@return		Array	["RGB string for contrasted color",floating number for contrast ratio]

Example: http://www.equatorium.net/e1/ou-contrastes-obtenir_en.html
& http://interfacteur.blogspot.fr/2014/06/outils-couleurs-contrastes-accessibles.html

Functions converting rgb to hsl and hsl to rgb
are from
http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
and also parameters:
 * @param	Number	origR		The red color value
 * @param	Number	origG		The green color value
 * @param	Number	origB		The blue color value
 */

var contrasteTrouver = function(origR,origG,origB) {

	var r = origR / 255,
		g = origG / 255,
		b = origB / 255,
		max = Math.max(r, g, b),
		min = Math.min(r, g, b),
		h, s, l = (max + min) / 2,
		contrasteOK = ["",0];

	//From axonflux.com : rgb to h (s and l are declined in an array)
	if(max == min) h = s = 0; // achromatic
	else{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	//End from axonflux.com : rgb to h (s and l are declined in an array)

	if (l < .15 || l > .85){
		var rgb = hsl2rgb(h,s,1 - l);
	//Return 1
		return contrasteOK = [
			Math.floor(rgb[0] * 255) + "," + Math.floor(rgb[1] * 255) + "," + Math.floor(rgb[2] * 255),
			Math.floor(contrasteEvaluer(origR,origG,origB,rgb[0] * 255,rgb[1] * 255,rgb[2] * 255) * 100) / 100
		];
	}
	//Possible values of hue from 5 complementary colors
	var H = [
				(h + .25) % 1,
				(h + .33) % 1,
				(h + .5) % 1,
				(h + .66) % 1,
				(h + .75) % 1
			];

	H.forEach(function(zv1) {
		sl.forEach(function(zv2) {
			var rgb = hsl2rgb(zv1,zv2[0],zv2[1]);
			//the more ehanced contrast
			var contrastant = contrasteEvaluer(origR,origG,origB,rgb[0] * 255,rgb[1] * 255,rgb[2] * 255);
			if (contrasteOK[1] < contrastant){
				contrasteOK = [
					Math.floor(rgb[0] * 255) + "," + Math.floor(rgb[1] * 255) + "," + Math.floor(rgb[2] * 255),
					Math.floor(contrastant * 100) / 100
				];
	}	});	});
	//Final return
	return contrasteOK;
}

//Possible values of saturation and luminosity
var sl = [];
[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1].forEach(function(zv1) {
	[.05,.1,.2,.3,.4,.5,.6,.7,.8,.9,.95].forEach(function(zv2) {
		sl.push([zv1,zv2]);
});	});

//axonflux.com : methods for hsl/hue to rgb
function hsl2rgb(h,s,l) {
	var r, g, b;
	if(s == 0) r = g = b = l; // achromatic
	else{
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}
	return [r,g,b];
}
function hue2rgb(p, q, t) {
	if(t < 0) t += 1;
	if(t > 1) t -= 1;
	if(t < 1/6) return p + (q - p) * 6 * t;
	if(t < 1/2) return q;
	if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	return p;
}
//End of axonflux.com : methods for hsl/hue to rgb

//To calculate contrast ratio from WCAG 2: http://www.w3.org/TR/WCAG20-TECHS/G17.html
/* see also https://github.com/interfacteur/js-astuces/blob/master/colorContrastCalculation.js */
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
