<?php
class FigTriX { //to do : classe abstraite ?
	protected $figure;
	public function getFigure() { return implode("",$this->figure); }
	public function setFigure($x) { $this->figure = $x; }

	public function __construct($p,$k,$v,$lgopus) {
		$sizes = getimagesize(PATH.$p.$k);
		$this->figure = array('<figure>'.PHP_EOL);
		$this->figure[0] .= '<a href="';
		$this->figure[1] = '<img src="'.PATH.$p.$k.'" alt="" width="'.$sizes[0].'" height="'.$sizes[1].'">'.PHP_EOL;
		$this->figure[1] .= '<figcaption'.($lgopus !== null ? ' lang="'.$lgopus.'"' : '').'>'.$v.'</figcaption>'.PHP_EOL;
		$this->figure[1] .= '</a>'.PHP_EOL.'</figure>'.PHP_EOL;
}	}
?>

