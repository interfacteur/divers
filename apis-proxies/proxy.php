<?
header("Access-Control-Allow-Origin: *"); //mais contrôle du referer…

$targetHeaderCT = "Content-Type: text/plain; charset=utf-8";

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //mais header("Access-Control-Allow-Origin: *");
if (count($m) == 1) {
	$url = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

	if (count($url) > 1) {

		$context = stream_context_create(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));
		$target = file_get_contents($url[1], false, $context);

		$targetHeader = $http_response_header;
		foreach ($targetHeader as $value)
			if (strpos($value, "Content-Type:") === 0)
				$targetHeaderCT = $value;
}	}

header($targetHeaderCT);
header("Cache-Control: no-cache");

if (count($url) > 1 && count($m) == 1) {

	echo $target;

}

/* http://www.equatorium.net/e1/ou--outils/proxy.php :

exemples sur http://www.equatorium.net/e1/ou--outils/proxy-exemples.html

*/

?>