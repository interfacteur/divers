<?php
include("_constantes.php");

include(PATH."classes/Config.php");
include(PATH."classes/Form.php");
include(PATH."classes/Language.php");
include(PATH."classes/Page.php");

$page = new Page(Config::$confDefault,"en");
$lg = $page->getLg();
$pages = $page->getPages();
$content = isset($content) && in_array($content,$pages) ? $content : $pages[0];
$titles = $page->getTitles();
$title = $titles[$content];
$versions = $page->getVersions();
?>

<!DOCTYPE html>
<html lang="<?php echo $lg; ?>">

<head>
<meta charset="UTF-8">
<title><?php echo $title; ?></title>
<script type="text/javascript" src="<?php echo PATH; ?>scripts/compatibily.js"></script>
<link rel="stylesheet" href="<?php echo PATH; ?>css/regularize.css">
<link rel="stylesheet" href="<?php echo PATH; ?>css/subj.css">
<script>
<?php
//détection de fonctionnalités par Modernizr du coup éviter preg_match('/(?i)msie [1-8]/',$_SERVER['HTTP_USER_AGENT']))
if ($content != "gallery")
	echo 'compat("'.PATH.'",'.sizeof($pages).');';
else {
	include_once(PATH."classes/ConfigOpus.php");
	$on = ConfigOpus::confOpus();
	echo 'compat("'.PATH.'",'.sizeof($pages).','.sizeof($on[Config::$confDefault]).');';
}
?>
</script>
</head>

<body>
<section class="page">
<?php
include (PATH.'includes/_menu.php');
include (PATH.'includes/'.$content.'.'.$lg.'.php');
?>
<p class="center"><a href="#top" title="top" class="top">^</a></p>
</section>
</body>

</html>
