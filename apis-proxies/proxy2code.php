<?
header("Access-Control-Allow-Origin: *"); //mais contrôle du referer…

header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache");

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //mais header("Access-Control-Allow-Origin: *");
if (count($m) == 1) {
	$url = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

	if (count($url) > 1) {


//		var_dump(apache_request_headers ( void )); //configurer un module ? http://php.net/manual/fr/function.apache-request-headers.php


/* pas la bonne version de PHP pour stream_context_set_default
pour l'instant get_headers ne renvoie que 4 paramètres
array(4) {
	[0]=>  string(22) "HTTP/1.0 403 Forbidden"
	["Cache-Control"]=>  string(8) "no-cache"
	["Connection"]=>  string(5) "close"
	["Content-Type"]=>  string(9) "text/html"
}

		#stream_context_set_default(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));
		$status = get_headers($url[1], 1);
		var_dump($status);
 		echo $status["Status"]; */


		$status = ":";
		$context = stream_context_create(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));
		$target = @file_get_contents($url[1], false, $context); //http://stackoverflow.com/questions/272361/how-can-i-handle-the-warning-of-file-get-contents-function-in-php
		$targetHeader = $http_response_header;

		foreach ($targetHeader as $value)
			if (strpos($value, "Status:") === 0)
				$status = $value;

		// if ($status == ":")
		// 	foreach ($targetHeader as $value)
		// 		if (count(preg_split("/Content-Type\s*:/i", $value)) > 1 && stripos($value, "html") > 0)
		// 			$status = ;

		echo $status;
}	}

/* http://www.equatorium.net/e1/ou--outils/proxy2code.php :

exemples sur

*/

?>