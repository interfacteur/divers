//NB : pour la configurations de variables js via PHP :
	//voir inc.head2.php


var route = jQuery("html");




/* gestion du localStorage, actif a partir du 26 novembre 2012 :
	en fonction des mises a jour du site si evolution de contenu */
//ou bien gestion via une variable PHP valable 24 heures ?
if (typeof localStorage != "undefined"){


	var version = 10; //130114
/*
	var version = 9; //121214
	var version = 8; //121214
	var version = 7; //121207
	var version = 5; //121205
	var version = 4; //121130 modif de la veille
	var version = 3; //121127 feutres etc.
	var version = 2; //121127 : parametrage popup FB 
	var version = 1; //121126 : mise a jour HTML zones participants et commentaires
	var version = 0; //121109>121126 - recette = 0 au 121126 (avant : dev = true/false), date d'acivation du localStorage */
	var vidangeant = new Array();
	vidangeant[0] = function(){ return; }
	vidangeant[1] = function(){ localStorage.clear(); }
	// for (var i = 1;i<44;i++) vidangeant[i] = function(){ localStorage.clear(); } //pour un nbre limite de versions

	// var recette = 1;
	var recette = 0;

	if (recette == 1) localStorage.clear();
	// else if (localStorage.getItem("version") != null) vidangeant[version - parseInt(localStorage.getItem("version"))](); //pour un nbre limite de versions
	else if (localStorage.getItem("version") != null){
		var difference = version - parseInt(localStorage.getItem("version"));
		vidangeant[isNaN(difference / difference) ? 0 : 1]();
	}

	localStorage.setItem("version",version);
}



//connexion facebook (lancer fbAsyncInit avant lamachine.js)
var scope = "publish_actions, email, user_birthday";
var preremplissage = ["gender","first_name","last_name","email","birthday"];

var utilisateur;
var fcbk = false;
jQuery("document").ready(function(){
	fcbk = jQuery(".facebook");
	window.connexion = fcbk.html();
	fcbk.click(function(ze){
		ze.preventDefault();
		if (! route.hasClass("bf") && ! ze.isTrigger){
			setTimeout(function(){
				fcbk.trigger("click");
			},1000);
}	});	});
var attendant = false;
var bienvenue = ["Bonjour","Se d\xE9connecter"];
var codeB = new Array();
codeB["span"] = ['<span>','</span>'];
codeB["strong"] = ['<strong>','</strong>'];
codeB["a"] = '<a href="#" class="immediat connecte"><img src="' + racine + 'images/picto/picto-deconnecter.gif" width="20" height="20" alt=" ' + bienvenue[1] + ' " /></a>';
codeB["img"] = ['<img src="http://graph.facebook.com/','/picture" height="27" width="27" alt="','" />'];

window.fbAsyncInit = function(){
	FB.init({
		appId      : ffbb[0],
		channelUrl : ffbb[1],
		status     : true, 
		cookie     : true, 
		xfbml      : true  
	});
	// FB.Canvas.setAutoGrow(); //http://developers.facebook.com/docs/guides/canvas/ http://developers.facebook.com/docs/reference/javascript/FB.Canvas.setAutoGrow/
	function combiner(){
		if (fcbk === false) return setTimeout(combiner,250); // cf. aussi http://stackoverflow.com/questions/5706757/is-there-a-way-to-check-document-ready-if-jquery-is-not-available
		FB.getLoginStatus(function(reponse){
			if (reponse.status === "connected") accueillir();
		});
		FB.Event.subscribe("auth.login", function(){
			accueillir();
		});
		FB.Event.subscribe("auth.logout", function(){
			route.removeClass("bfFB"); //faire disparaitre bouton recommande a la deconnexion
			fcbk.html(connexion);
		});
		fcbk.find("a:not(.connecte)").live("click",function(ze){
			ze.preventDefault();
			FB.login(function(){ }, {scope: scope });
		});
		route.addClass("bf");
	}
	function accueillir(){
		FB.api("/me",function(zrep){ //voir : path ?
			utilisateur = zrep;
			route.addClass("bfFB"); //ne faire apparaitre bouton recommande qu'a la connexion
			if (attendant) eval(attendant)(); //scripts post-affichage dependant de la connexion : synremplir(), recommander()
			var ecce = codeB["span"][0] + codeB["span"][0] + bienvenue[0] + codeB["span"][1] + codeB["strong"][0] + utilisateur.first_name;
			ecce += codeB["strong"][1] + codeB["a"] + codeB["span"][1] + codeB["img"][0] + utilisateur.id;
			ecce += codeB["img"][1] + utilisateur.name + codeB["img"][2];
			fcbk.html(ecce);
			fcbk.find("a.connecte").parent("span").click(function(ze){ //live sur parent d'un inexistant : non
				ze.preventDefault(); 
				ze.stopPropagation()
				FB.logout();		
	});	});	}
	combiner();
}
