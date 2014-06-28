//To manage 'oninput' and its fallback ('onkeydown' + 'onkeyup')
var gererOninputOnkey = function(zfun,a,b,c,d,e) { //until 5 target elements
	/* NORMAL ORDER OF THESE EVENTS:
		keydown input keyup */
	zfun.arg = arguments;
	var argLG = zfun.arg.length;
	zfun.execute = 0;
	zfun.executions = [
		function(n){ //in the order of events the first between 'onkey ; oninput', or always 'onkey' without 'oninput' support
			++zfun.execute;
			zfun.executions[zfun.execute + n]();
			zfun.call(this);
		},
		function(){}, //in the order of events the second between 'onkey ; oninput', or neither without 'oninput' support
		function(){ //following and end of 'onkey' if before 'oninput', or always without 'oninput' support
			for (var ind2=1;ind2<argLG;++ind2){
				zfun.arg[ind2].onkeydown = null;
				zfun.arg[ind2].onkeyup = zfun;
		}	},
		function(){}, //following of 'oninput' if before 'onkey'
	];
	for (var ind0=1;ind0<argLG;++ind0) {
		zfun.arg[ind0].onkeydown = function() {
			var t = this;
			var valeur = t.value;
			t.onkeyup = function() {
				if (this.value != valeur)
					zfun.executions[zfun.execute].call(this,1);
		}	};
		zfun.arg[ind0].oninput = function() {
			zfun.executions[zfun.execute].call(this,2);
			for (var ind1=1;ind1<argLG;++ind1) {
				zfun.arg[ind1].onkeydown = null;
				zfun.arg[ind1].onkeyup = null;
				zfun.arg[ind1].oninput = zfun;
}	};	}	}

//For instance:
//Events -> manipulate form to get…
function faire() {
  this.truc = -4;
  //etc.
}
gererOninputOnkey(faire,document.querySelector("input"));


//Also, to fill output and its fallback
var indiquer =
	(typeof(document.querySelector("output").value) !== "undefined") ?
	function(ze,zv) { ze.value = zv; } :
	function(ze,zv) { ze.innerHTML = zv; };



/* notes

- init idea from -
Using the oninput event handler with onkeyup/onkeydown as its fallback · Mathias Bynens
http://mathiasbynens.be/notes/oninput
	but how could it get new value on keydown?

on old mobiles without oninput - cf. A HTML5 Browser maze - consider
if ($.browser.mozilla) $("#id").keypress (keyPress);
else $("#id").keydown (keyPress);
from http://stackoverflow.com/questions/9940829/how-to-capture-the-onscreen-keyboard-keydown-and-keyup-events-for-touch-devi

onInput event detection support · Issue #210 · Modernizr/Modernizr · GitHub
https://github.com/modernizr/modernizr/issues/210

Safari HTML Reference: Supported Attributes
https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html
oninput
Available in Safari 1.3 and later.
Available in iOS 1.0 and later.

- with onpropertychange -
A near-perfect oninput shim for IE 8 and 9 – Ben Alpert

- important but? -
A HTML5 Browser maze, oninput support - Blog - Daniel Friesen (Dantman, Nadir-Seen-Fire)
http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support/
		*/
