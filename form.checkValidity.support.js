/* Inspection of form checkValidity support

In css:
form:valid,
form.valid  {
  etc
}
but 'form:invalid' seems to have bug on FF 15

input:invalid,
input.invalid {
  etc.
}
*/

var qs = typeof(document.querySelector) === "undefined"; //IE 5.5-7, FF 2-3.0, Opera 9-9.6
var checkValiditySupport = {
	formulaire:
		qs ? false :
		(function() {
			try {
				return document.querySelector("#connaissance:valid") ? true : false;
			} catch(e) { /* #connaissance:valid => DOMException on Safari 4.0.5 */ }
			return false;
		})(),
	champ:
		qs ? false :
		(function() {
			try {
				return document.querySelector("#hexa:valid") ? true : false;
			} catch(e) { }
			return false;
		})(),
	marquer: function() {
		var b = document.getElementsByTagName("body")[0],
			c = b.className;
		! this.formulaire && (b.className = c + " validite-formulaire");
		c = b.className;
		! this.champ && (b.className = c + " validite-champ");
	}
};

/* others

var html5ctrl = typeof document.createElement('input').checkValidity === "function";
switch(html5ctrl){
  case true:
    //like modern FF: no form submit with an invalid input
    //but on webkit form can be submited with "! this.checkValidity()"
  case false:
    //oldier: form can always be submited
}
To try: var html5ctrl = typeof document.createElement('form').checkValidity === "function";



return "noValidate" in document.createElement("form")



To test:
var elementSupportsRequird = function() {
	if ("required" in document.createElement("input")) return true;
	return false;
};
*/
