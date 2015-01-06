<?php
include("_constantes.php");

include(PATH."classes/Config.php");
include(PATH."classes/Form.php");
include(PATH."classes/Language.php");

include(PATH."classes/ConfigOpus.php");
include(PATH."classes/FigurePop.php");

$language = new Language(Config::$confDefault,"en"); //(GET || defaut) || url hors scope : HTTP_ACCEPT_LANGUAGE || "en"
$lg = $language->getLang();
$oo = new Form("opus");
$o = $oo->getData();
$opus = ConfigOpus::confOpus();
$lgopus = isset($opus[$lg]) ? $lg : Config::$confDefault;
$oeuvres = $opus[$lgopus];
$oeuvre = array_keys($oeuvres);
if (! in_array($o,$oeuvre))
	$o = $oeuvre[0];
$close = ConfigOpus::confClose();
$lgclose = isset($close[$lg]) ? $lg : Config::$confDefault;
$linkClose = $close[$lgclose];
$fig = new FigurePop(WORKS,$o,$oeuvres[$o],($lgopus != $lgclose ? $lgopus : null),$linkClose,($lgclose != $lg ? $lgclose : null));
?>

<!DOCTYPE html>
<html lang="<?php echo $lg; ?>">

<head>
<meta charset="UTF-8">
<title>Gérard subj</title>
<script>
document.createElement("figure");
document.createElement("figcaption");
</script>
<link rel="stylesheet" href="<?php echo PATH; ?>css/regularize.css">
<link rel="stylesheet" href="<?php echo PATH; ?>css/subj.css">
</head>

<body class="pop">
<?php
echo $fig->getFigure();
?>
</body>

</html>