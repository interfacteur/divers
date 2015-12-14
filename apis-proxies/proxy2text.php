<?
header("Access-Control-Allow-Origin: *"); //mais contrôle du referer…

header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache");

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //mais header("Access-Control-Allow-Origin: *");
if (count($m) == 1) {
	$url = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

	if (count($url) > 1) {

		$context = stream_context_create(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));

		echo file_get_contents($url[1], false, $context);
}	}

/* http://www.equatorium.net/e1/ou--outils/proxy2text.php :

exemples sur http://www.equatorium.net/e1/ou--outils/proxy2text-exemples.html

*/

?>