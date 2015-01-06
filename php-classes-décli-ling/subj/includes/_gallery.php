<?php
include_once(PATH."classes/ConfigOpus.php");
include(PATH."classes/Figure.php");
include(PATH."classes/Figures.php");

$figures = new Figures($lg,$content);
$authors = ConfigOpus::confPhoto();

$figures->toForm();
$figures->toGal();

echo '<p class="right"><em>'.(isset($authors[$lg]) ? $authors[$lg] : $authors[Config::$confDefault]).'</em></p>'.PHP_EOL;
echo '</article>'.PHP_EOL;
echo '<script src="'.PATH.'/scripts/jquery-1.11.1.min.js"></script>'.PHP_EOL;
echo '<script src="'.PATH.'/scripts/subj.js"></script>'.PHP_EOL;
?>