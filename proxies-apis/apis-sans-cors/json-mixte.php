<?php
$pad = (count($_GET) > 0 && ! empty($_GET["callback"])) ? true : false;
if ($pad)
	header("Content-Type: application/javascript; charset=utf-8");
else
	header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-cache");


echo $pad ? htmlentities($_GET["callback"])."(" : "";
?>
{
	"name": "Antoine",
	"number": 144,
	"string": "abcdefgh",
	"boolean": false,
	"null": null
}<?echo $pad ? ")" : "";?>