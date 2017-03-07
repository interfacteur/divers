<?php
header ("Content-type: text/css; charset=utf-8");
if (count($_GET) > 0 && ! empty($_GET["li"])) {
	$last = htmlentities($_GET["li"]);
	if (is_numeric($last) && $last > 1 && $last < 61) {
		echo PHP_EOL.'/* alternative à nav li:last-child  pour '.$last.' éléments */'.PHP_EOL;
		echo 'ol li';
		for ($i=1;$i<$last;++$i)
			echo ' + li ';
		echo ' {'.PHP_EOL.'	background: #EED;'.PHP_EOL;
		echo '	border-bottom: 0;'.PHP_EOL;
		echo '}'.PHP_EOL;
}	}
?>