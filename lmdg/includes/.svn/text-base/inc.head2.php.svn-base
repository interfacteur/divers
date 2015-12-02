<link href="<?php echo $racine.'styles/lamachine.css'; ?>" rel="stylesheet" />
<script src="<?php echo $racine.'scripts/jquery.js'; ?>" type="text/javascript"></script>
<script type="text/javascript">
/* <![CDATA[ */
<?php
/* cf. _phase.php */
//navigation, facebook et webservices
echo 'var racine = "'.$racine.'";
var enracine = "'.$racine.'includes/_cont.php?url=cont.";
var rhizome = "'.$racine.'includes/_cont.php?url=contact.";
var domaine = "'.$domaine.'";

var ffbb = ["'.$appid.'","'.$urlFB.'","'.$appns.'"];

var ws = new Array();
';
if ($env == "prod"){ //prod
	echo 'ws[0] = "http://www.dolce-gusto-lamachine.fr/ws/ateliers.json";
ws[1] = "http://www.dolce-gusto-lamachine.fr/ws/inscription.json";
ws[2] = "http://www.dolce-gusto-lamachine.fr/ws/fb/";
ws[3] = "http://www.dolce-gusto-lamachine.fr/ws/machines.json";
';
} else{ //pre-prod et dev
	echo 'ws[0] = "http://www.lamachine.dolce-gusto.fr.krypton.publicis-modem.fr/ws/frontend_dev.php/ateliers.json";
ws[1] = "http://www.lamachine.dolce-gusto.fr.krypton.publicis-modem.fr/ws/frontend_dev.php/inscription.json";
ws[2] = "http://www.lamachine.dolce-gusto.fr.krypton.publicis-modem.fr/ws/frontend_dev.php/fb/";
ws[3] = "http://www.lamachine.dolce-gusto.fr.krypton.publicis-modem.fr/ws/frontend_dev.php/machines.json";
';
}
?>
//NB : pour configuration manuelle du versionning du localStorage + connexion facebook :
	//voir phase.js
/* ]]> */
</script>
<script src="<?php echo $racine.'scripts/phase.js'; ?>" type="text/javascript"></script>  <!-- doit venir apres 'var racine' et avant script#facebook-jssdk -->
<script src="<?php echo $racine.'scripts/lamachine.js'; ?>" type="text/javascript"></script>
<!-- 14 janvier 2013 appel de superbox et de videojs dans footer -->
<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
</head>

