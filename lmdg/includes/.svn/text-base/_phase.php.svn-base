<?php
/* Chemins et configurations en PHP */


//Includes et navigation
$inclusion = getenv("DOCUMENT_ROOT");
if (strstr($inclusion,"EQUESTOFR") > -1){ //Sur Argon
	$racine = "/svn/";
	$inclusion = $inclusion.$racine;
} else $racine = "/";


//Facebook (pour le js : cf. inc.head2.php)
$domaine = $_SERVER['SERVER_NAME'];
if (strpos($domaine,'www.dolce-gusto-lamachine.fr') !== false){ //prod
	$env = "prod";
	$appid = "123112744510134";
	$urlFB = "//www.dolce-gusto-lamachine.fr";
	$appns = "dolce_gusto_mach";
} else if(strpos($domaine,'krypton') !== false){ //pre-prod doit rester http://www.lamachine.dolce-gusto.fr.krypton.publicis-modem.fr/ confirmation Julien L 121116
	$env = "pprod";
	$appid = "325397264234204";
	$urlFB = "//www.lamachine.dolce-gusto.fr.krypton.publicis-modem.fr";
	$appns = "dolce_gusto_mach_pp";
} else{ //dev : http://gaelan.argon.equesto.fr/dg-lamachine/_proto/
	$env = "dev";
	$appid = "515526941809095";
	$urlFB = "//gaelan.argon.equesto.fr/dg-lamachine/_proto/";
	$appns = "dolce_gusto_mach_dev";
}
?>

