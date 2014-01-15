//Instancier une variable a 0, ou si IE, a la valeur de la version de IE

var msie = 0 /*@cc_on + parseInt(navigator.userAgent.toLowerCase().split("msie")[1]) @*/;

//Verifier si version de IE inferieure a l'argument 'zv'

function delimiter(zv){
	return 1 / (msie - 1) > 1 / (parseInt(zv) - 1);
}

//Exemple :

function etc(){
	if (delimiter(8)) return alert("Navigateur insuffisant, d\xE9sol\xE9 de ne pouvoir vous donner satisfaction."); //lt IE 8
}

//En complement pour la preparation de methodes telles que methodes[normes]() 

var normes = Math.ceil(Math.abs(msie - 8) / (Math.abs(msie - 8) + 1)); //pour IE 8 : 0 ; sinon : 1
