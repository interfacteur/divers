<?php
echo '<nav id="top">'.PHP_EOL;
echo '<h1><a href="'.$pages[0].'.php?lang='.$lg.'">';
echo '<img src="subj/images/'.$lg.'/site.gif" height="37" width="198" alt="'.$titles[$pages[0]].'">';
echo '</a></h1>'.PHP_EOL.'<section>'.PHP_EOL;
foreach ($page->getDecli() as $v) {
	echo '<a href="'.$content.'.php?lang='.$v.'">';
	echo '<img src="subj/images/version-'.$v.'.gif" height="18" width="108" alt="'.$versions[$v].'">';
	echo '</a>'.PHP_EOL;
}
echo '<ul>'.PHP_EOL;
foreach ($pages as $v) {
	echo '<li>'.($v != $content ? '<a href="'.$v.'.php?lang='.$lg.'">' : '');
	echo '<img src="subj/images/'.$lg.'/'.$v.'.gif" height="18" alt="'.$titles[$v].'">';
	echo ($v != $content ? '</a>' : '').'</li>'.PHP_EOL;
}
echo '</ul>'.PHP_EOL.'</section>'.PHP_EOL.'</nav>'.PHP_EOL;
?>