<?php
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-cache");

/*
header("Access-Control-Allow-Credentials: true");
header("X-Content-Type-Options: nosniff");
header("Vary: Accept-Encoding");

header("X-XSS-Protection=1:  mode=block");

header("Vary: Accept-Encoding,X-Forwarded-Proto,Cookie");
header("Vary: Origin");
header("Vary: Host");
*/


?>
{
	"name": "Antoine",
	"number": 144,
	"string": "abcdefgh",
	"boolean": false,
	"null": null
}