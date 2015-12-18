<?php
header("Content-Type: application/javascript; charset=utf-8");
header("Cache-Control: no-cache");


echo (count($_GET) > 0 && ! empty($_GET["callback"])) ? htmlentities($_GET["callback"]) : "";
?>
({
	"name": "Antoine",
	"number": 144,
	"string": "abcdefgh",
	"boolean": false,
	"null": null
})