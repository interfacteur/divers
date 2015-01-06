<?php
header ("Content-type: text/css"); /* http://stackoverflow.com/questions/12367134/how-do-i-run-php-inside-css */

//styles alternatifs pour navigateurs n'interprétant pas les pseudo-classes child

if (count($_GET) > 0) {
	if (! empty($_GET["last"])) {
		$llll = htmlentities($_GET["last"]);
		if ($llll < 25) {

			echo '/* nav section li:last-child */'.PHP_EOL;
			echo 'nav section li';
			for ($i=1;$i<$llll;++$i)
				echo ' + li ';
			echo PHP_EOL.'{ float: right; border-left: 1px solid #BAAF91; }'.PHP_EOL;
	}	}
	if (! empty($_GET["gal"])) {
		$llll = htmlentities($_GET["gal"]);
		$llll = $llll > 63 ? 63 : $llll; /* cf. ConfigOpus::$confMax */

		echo '/* .gallery figure:nth-child(n+4) */'.PHP_EOL;
		echo '.gallery figure + figure + figure + figure';
		echo PHP_EOL.'{ border-top: 1px solid #e2ddcf; }'.PHP_EOL;

		echo '/* .gallery figure:nth-of-type(3n+1) */'.PHP_EOL;
		$f1 = ' figure';
		$f2 = ' +'.$f1;
		$f = '.gallery'.$f1.$f2.$f2;
		$p = array('{ clear: left; }'.PHP_EOL,'{ clear: none; }'.PHP_EOL,'{ clear: none; }'.PHP_EOL);
		for ($i=4;$i<=$llll;++$i) {
			$f .= $f2;
			echo $f.$p[($i - 4) % 3];
}	}	}
?>





