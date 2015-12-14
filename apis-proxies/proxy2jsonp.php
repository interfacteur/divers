<?
header("Access-Control-Allow-Origin: *"); //mais contrôle du referer…

header("Content-Type: application/javascript; charset=utf-8");
header("Cache-Control: no-cache");

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //mais header("Access-Control-Allow-Origin: *");
if (count($m) == 1) {

	$url1 = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
	$url2 = preg_split("/(&callback=)|(&cb=)/", $url1[1]);

	$context = stream_context_create(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));

	echo count($_GET) > 0 ? (! empty($_GET["callback"]) ? htmlentities($_GET["callback"]) : (! empty($_GET["cb"]) ? htmlentities($_GET["cb"]) : "")) : "";
	echo "(";
	echo file_get_contents($url2[0], false, $context);
	echo ")";

}

/* http://www.equatorium.net/e1/ou--outils/proxy2jsonp.php :

http://www.equatorium.net/e1/ou--outils/proxy2jsonp.php?query=http://www.interfacteur.net/apis/json.php

http://www.equatorium.net/e1/ou--outils/proxy2jsonp.php?cb=do&query=http://www.interfacteur.net/apis/json.php

http://www.equatorium.net/e1/ou--outils/proxy2jsonp.php?query=http://www.interfacteur.net/apis/json.php&callback=jQuery956_123&_=124

http://www.equatorium.net/e1/ou--outils/proxy2jsonp.php?cb=do&query=http://www.interfacteur.net/apis/json.php&callback=jQuery956_123&_=124

*/

?>