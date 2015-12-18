<?php
header("Access-Control-Allow-Origin: equatorium.net"); //et contrôle du referer…

header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache");

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //mais header("Access-Control-Allow-Origin: *");
if (count($m) == 1) {
	$url = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

	if (count($url) > 1) {

		stream_context_set_default(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));
		@get_headers($url[1], 1);
		$headers = $http_response_header;

		if (count($headers) == 0) {
			$target = "Status: 400 Address not found";
			header($target);
		}
		else {
			$target = @file_get_contents($url[1], false, null); //http://stackoverflow.com/questions/2280394/how-can-i-check-if-a-url-exists-via-php
			foreach ($headers as $value)
				if (count(preg_split("/^HTTP\/\d\.\d\s+/i", $value)) > 1)
					$code = $value;
			if (substr($code, 9, 3) != 200) {
				$target = "Status: ".substr($code, 9);
				header($target);
			}
			elseif ($target == "") { //probablement traité par cas précédent
				$target = "Status: 400";
				header($target);
		}	}

		echo $target;
}	}

/* http://www.equatorium.net/e1/ou--outils/proxy2text.php :
exemples sur http://www.equatorium.net/e1/ou--outils/proxy2text-exemples.html
*/

?>