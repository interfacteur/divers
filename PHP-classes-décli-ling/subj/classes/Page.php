<?php
class Page {

	private $decli;
	public function getDecli() { return $this->decli; }
	public function setDecli($x) { $this->decli = $x; }

	private $lg;
	public function getLg() { return $this->lg; }
	public function setLg($x) { $this->lg = $x; }

	private $pages;
	public function getPages() { return $this->pages; }
	public function setPages($x) { $this->pages = $x; }

	private $titles;
	public function getTitles() { return $this->titles; }
	public function setTitles($x) { $this->titles = $x; }

	private $versions;
	public function getVersions() { return $this->versions; }
	public function setVersions($x) { $this->versions = $x; }

	public function __construct($lgForm,$lgNav) {
		$language = new Language($lgForm,$lgNav); //(GET || defaut) || url hors scope : HTTP_ACCEPT_LANGUAGE || "en"
		$this->decli = $language->getOther();
		$this->lg = $language->getLang();

		$this->pages = Config::$confPages;

		$titles = Config::confMenu();
		$this->titles = $titles[$this->lg];

		$this->versions = Config::$confVersions;
	}
}
?>