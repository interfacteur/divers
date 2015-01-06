<?php
class FigureFormTriX { //to do : classe abstraite ?
	protected $form;
	public function getForm() { return $this->form; }
	public function setForm($x) { $this->form = $x; }

	protected $lgopus;
	public function getLgopus() { return $this->lgopus; }
	public function setLgopus($x) { $this->lgopus = $x; }

	protected $oeuvres;
	public function getOeuvres() { return $this->oeuvres; }
	public function setOeuvres($x) { $this->oeuvres = $x; }

	protected $qty;
	public function getQty() { return $this->qty; }
	public function setQty($x) { $this->qty = $x; }

	protected $pagi;
	public function getPagor() { return $this->pagi; }
	public function setPagor($x) { $this->pagi = $x; }

	protected $pagact;
	public function getP() { return $this->pagact; }
	public function setP($x) { $this->pagact = $x; }

	public function __construct($lg,$content) {
		$opus = ConfigOpus::confOpus();
		$this->lgopus = isset($opus[$lg]) ? $lg : Config::$confDefault;
		$this->oeuvres = $opus[$this->lgopus];
		$qty = sizeof($this->oeuvres);
		$this->qty = $qty;

		$pagmax = ConfigOpus::$confMax;
		$pagor = ConfigOpus::$confPag;
		$pagin = new Form("pagi",$pagor);
		$pagi = $pagin->getData();
		$this->pagi = $pagi;

		$pages = ceil($qty / $pagi);

		$pp = new Form("page",1);
		$p = ($pp->getData() - 1) * $pagi < $qty ? $pp->getData() : 1;
		$this->pagact = $p;

		$this->form = '<form action="'.$content.'.php?lang='.$lg.'" method="post" class="view-gal">'.PHP_EOL;
//champs cachés : mention de la page active, mention du nombre d'oeuvres par page
		$this->form .= '<input type="hidden" name="page" value="'.$p.'">'.PHP_EOL;
		$this->form .= '<input type="hidden" name="pagi" value="'.$pagi.'">'.PHP_EOL;
//pagination - en soumission immédiate
		$this->form .= 'Pages : '.PHP_EOL;
		for ($i = 1;$i<=$pages;++$i)
			if ($i != $p)
				$this->form .= '<input type="submit" value="'.$i.'" name="page">'.PHP_EOL;
			else
				$this->form .= '<input type="text" value="'.$i.'" disabled>'.PHP_EOL;
//nombre d'oeuvres par page - en boite de sélection
		$this->form .= '<label for="perp">Opus/page :</label>'.PHP_EOL;
		$this->form .= '<select name="pagi" id="perp">'.PHP_EOL;
		$qty = $qty > $pagmax ? $pagmax : $qty;
		for ($i = $pagor;$i < $qty;$i += $pagor) {
			if ($i != $pagi)
				$this->form .= '<option>'.$i.'</option>'.PHP_EOL;
			else
				$this->form .= '<option selected>'.$i.'</option>'.PHP_EOL;
		}
		if ($qty != $pagi)
			$this->form .= '<option>'.$qty.'</option>'.PHP_EOL;
		else
			$this->form .= '<option selected>'.$qty.'</option>'.PHP_EOL;
		$this->form .= '</select>'.PHP_EOL;
//soumission du nombre d'oeuvres par page
		$this->form .= '<input type="submit" value="OK" id="perpa">'.PHP_EOL;
		$this->form .= '</form>'.PHP_EOL;
	}

	public function toForm() {
		echo $this->form;
	}
}
?>