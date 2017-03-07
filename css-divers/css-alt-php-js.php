<!DOCTYPE html>
<html lang="fr">

<head>
<meta charset="UTF-8">
<title>Exemple CSS alternatifs aux CSS 3 avec PHP et Modernizr \ Oyat / Equatorium</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Gaëtan Langhade, interfacteur">

<script src="-media-css-alt-php-js/modernizr.js"></script>
<link rel="stylesheet" href="-media-css-alt-php-js/main.css">

<?php
//$li = (count($_GET) > 0 && ! empty($_GET["li"]) && is_numeric($_GET["li"]) && $_GET["li"] < 61) ? htmlentities($_GET["li"]) : 6;
$li = 6;
$message = '';
if (count($_GET) > 0 && ! empty($_GET["li"])) {
	if (is_numeric($_GET["li"]) && $_GET["li"] > 1 && $_GET["li"] < 61)
		$li = htmlentities($_GET["li"]);
	else
		$message = '<p>Le nombre d\'item doit être fixé par une valeur numérique supérieure à 1 et inférieure à 61.</p>'.PHP_EOL;
}
?>
<script>
if (! Modernizr.lastchild)
	document.write('<link rel="stylesheet" href="-media-css-alt-php-js/old.css.php?li=<?php echo $li; ?>">');
</script>
</head>

<body>
<h1>Exemple CSS alternatifs aux CSS 3 avec PHP et Modernizr</h1>
<p><a href="http://interfacteur.blogspot.fr/2014/12/css-alternatifs-avec-php-et-js.html">Cf. billet du 16 décembre 2014 sur le blog d'Interfacteur</a>.</p>
<?php
echo '<ol>'.PHP_EOL;
for ($i = 0; $i < $li; ++$i)
	echo '<li>Ecce '.rand().'</li>'.PHP_EOL;
echo '</ol>'.PHP_EOL;
echo '<form action="'.htmlspecialchars($_SERVER['REQUEST_URI'], ENT_QUOTES).'" method="get">'.PHP_EOL;
echo $message.PHP_EOL;
?>
<label for="item">Nombre d'item :</label>
<input type="number" id="item" name="li" value="<?php echo $li; ?>">
<input type="submit" value="rafraichir">
</form>
</body>
</html>