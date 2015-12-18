<?php
header("Access-Control-Allow-Origin: equatorium.net"); //et contrôle du referer…

header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-cache");

preg_match("/^http:\/\/www\.equatorium\.net/", $_SERVER[HTTP_REFERER], $m); //et header("Access-Control-Allow-Origin: equatorium.net");
if (count($m) == 1) {
	$url = explode("query=", "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

	if (count($url) > 1) {

		stream_context_set_default(array("http" => array("header" => "User-Agent: Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36")));
		@get_headers($url[1], 1);
		$headers = $http_response_header;

 		if (count($headers) == 0) { //http://stackoverflow.com/questions/2280394/how-can-i-check-if-a-url-exists-via-php
			$headMI = "null";
 			$headCO = "-1 Address not found";
 		}
 		else {
			foreach ($headers as $value) {
				if (count(preg_split("/Content-Type\s*:/i", $value)) > 1)
					$headMI = '"'.preg_split("/Content-Type\s*:\s*/i", $value)[1].'"';
				if (count(preg_split("/^HTTP\/\d\.\d\s+/i", $value)) > 1)
					$headCO = preg_split("/^HTTP\/\d\.\d\s+/i", $value)[1];
			}
			if (count(preg_split("/(json)|((application|text)\/javascript)/", $headMI)) > 1) {
				function cleanJSON ($t) {
					$t1 = preg_replace("/\/\/.*/", "", $t); //je sais chainer en JavaScript, mais en PHP ?
					$t2 = preg_replace("/\/\*([^\*]|\*(?!\/))*\*\//", "", $t1);
					$t3 = preg_replace("/^\s*/", "", $t2);
					$t4 = preg_replace("/\s\s/", "", $t3);
					return preg_replace("/[\n\r\t]/", "", $t4);
				};
				$url1 = preg_replace("/(&callback=\w+)|(\?callback=\w+$)|(callback=\w+&)/i", "", $url[1]);
				$target = @file_get_contents($url1, false, null);
					//https://api.github.com/repos/pradeep250677/mcrouter/commits?per_page=100&client_id=e8ce07d7ca81454ca7ca&client_secret=58e01a1e64bc997753cf364b80f53d922468722c
						/* {
							"typeMime": "application/json; charset=utf-8",
							"code": "409 Conflict"
						} */
					//est stoppé ici
				$targetClean = cleanJSON($target);
				$prospect = array(count(preg_split("/^\{/", $targetClean)), count(preg_split("/^\(\{/", $targetClean)));
				if ($prospect[0] > 1 || $prospect[1] > 1) {
					$json = $prospect[1] > 1 ? "false" : "true";
					$url2 = $url1.(count(preg_split("/\?/", $url1)) > 1 ? "&" : "?")."callback=perform";
					$target = @file_get_contents($url2, false, null);
					$jsonp = count(preg_split("/^\{/", cleanJSON($target))) > 1 ? "false" : "true";
		}	}	}


		print "{\n";
		print "\t\"typeMime\": ".$headMI.",\n";
		print "\t\"code\": \"".$headCO."\"";
		if ($json || $jsonp) {
			print ",\n\t\"json\": ".$json.",\n";
			print "\t\"jsonp\": ".$jsonp;
		}
		print "\n}";
}	}

?>