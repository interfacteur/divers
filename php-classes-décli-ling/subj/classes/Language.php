<?php
class Language {

	private $lang;
	public function getLang() { return $this->lang; }
	public function setLang($x) { $this->lang = $x; }

	private $other;
	public function getOther() { return $this->other; }
	public function setOther($x) { $this->other = $x; }

	public function __construct($lgForm,$lgNav) {
		$languages = Config::$confLanguages;
		$l = new Form("lang",$lgForm);
		$this->lang = $l->getData();
		if (! in_array($this->lang, $languages))
			$this->lang = $this->autoSelectLanguage($languages,$lgNav);
		$this->other = array();
		foreach ($languages as $v)
			if ($v != $this->lang)
				$this->other[] = $v;
	}

	//http://www.apprendre-php.com/portions-de-script/script-23-dtection-automatique-de-la-langue-du-navigateur.html
	public function autoSelectLanguage($aLanguages,$sDefault = "fr") {
		if (! empty($_SERVER["HTTP_ACCEPT_LANGUAGE"])) {
			$aBrowserLanguages = explode(",",$_SERVER["HTTP_ACCEPT_LANGUAGE"]);
			foreach ($aBrowserLanguages as $sBrowserLanguage) {
				$sLang = strtolower(substr($sBrowserLanguage,0,2));
				if (in_array($sLang, $aLanguages))
					return $sLang;
		}	}
		return $sDefault;
	}

}
?>