<?php
//appele par base.js
if (file_exists($_GET["url"])){
	header("Content-Type: application/xhtml+xml; charset=utf-8");
	include("_phase.php");
	echo '<div xmlns="http://www.w3.org/1999/xhtml">';
	include($_GET["url"]);
	echo '</div>';
} else header("HTTP/1.0 42 Not Found");
//http://www.commentcamarche.net/forum/affich-5970-php-savoir-si-un-fichier-existe
?>