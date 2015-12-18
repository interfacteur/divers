<?php
header("Access-Control-Allow-Origin: equatorium.net"); //et contrôle du referer…

header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache");

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //mais header("Access-Control-Allow-Origin: *");
if (count($m) == 1) {
	$url = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

	if (count($url) > 1) {

		stream_context_set_default(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));
		$headers1 = @get_headers($url[1], 1);
		$headers2 = $http_response_header;

		if (count($headers2) == 0) {
			$target = "Status: 400 Address not found";
			header($target);
			echo $target;
		}
		else {
			foreach ($headers2 as $value)
				if (count(preg_split("/^HTTP\/\d\.\d\s+/i", $value)) > 1)
					$code = $value;
			echo $code."\n";

			echo "\n\$http_response_header :\n";
			var_dump($headers2);

			echo "\nget_headers() :\n";
			var_dump($headers1);
		}
}	}

/* http://www.equatorium.net/e1/ou--outils/proxy.php :
exemples sur http://www.equatorium.net/e1/ou--outils/proxy-exemples.html
*/

?>