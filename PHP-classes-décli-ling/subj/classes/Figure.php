<?php
include(PATH."classes/FigTriX.php");

class Figure extends FigTriX { /* gallery */ //to do : classe abstraite ?
	public function __construct($p,$k,$v,$lgopus,$l,$lgopen,$lg) {
		parent::__construct($p,$k,$v,$lgopus);
		$sizes = getimagesize(PATH.WORKS.$k);
		$this->figure[0] .= PATH.WORKS.$k.'" data-target="'.POPUP.'?lang='.$lg.'" title="'.$l.'"'.($lgopen !== null ? ' lang="'.$lgopen.'"' : '');
		$this->figure[0] .= ' data-o="'.$k.'" data-w="'.$sizes[0].'" data-h="'.$sizes[1].'">'.PHP_EOL;
}	}
?>

