<?php
include(PATH."classes/FigureFormTrix.php");

class Figures extends FigureFormTrix {
	private $gal;
	public function getGal() { return $this->gal; }
	public function setGal($x) { $this->gal = $x; }

	public function __construct($lg,$content) {
		parent::__construct($lg,$content);
		$oeuvre = array_keys($this->oeuvres);
		$limit = $this->pagact * $this->pagi <= $this->qty ? $this->pagact * $this->pagi : $this->qty;

		$open = ConfigOpus::confOpen();
		$lgopen = isset($open[$lg]) ? $lg : Config::$confDefault;
		$linkOpen = $open[$lgopen];

		$this->gal = '<div class="gallery">'.PHP_EOL;
		for ($i = ($this->pagact - 1) * $this->pagi;$i < $limit;++$i) {
			$pct = $oeuvre[$i];
			$fig = new Figure( //to do : héritant de Figure ?
				THUMB,$pct,$this->oeuvres[$pct],
				($this->lgopus != $lgopen ? $this->lgopus : null),$linkOpen, //l'intitulé du lien encapsule la légende de l'image
				($lgopen != $lg ? $lgopen : null),$lg //le document HTML encapsule la légende de l'image
			);
			$this->gal .= $fig->getFigure();
		}
		$this->gal .= '</div>'.PHP_EOL;
	}

	public function toGal() {
		echo $this->gal;
	}
}
?>