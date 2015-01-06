<?php
class Config {

	static $confDefault = "fr"; //langue par défaut en absence de GET

	static $confLanguages = array( //déclinaisons linguistiques
		"fr",
		"en"
	);

	static $confVersions = array( //données linguistiques
		"fr" => "Version française",
		"en" => "English version"
	);

	static $confPages = array( //ensemble des pages
		"index" ,
		"portrait",
		"gallery",
		"contact"
	);

	static function confMenu() { //données de navigation (fonction car clés dynamiques)
		return array(
			"fr" => array(
				self::$confPages[0] => "Le site officiel de Subj",
				self::$confPages[1] => "Portrait de Subj",
				self::$confPages[2] => "Galerie de Subj",
				self::$confPages[3] => "Contact"
			),
			"en" => array(
				self::$confPages[0] => "The official site of Subj",
				self::$confPages[1] => "Portrait of Subj",
				self::$confPages[2] => "Gallery of Subj",
				self::$confPages[3] => "Contact"
	)	);	}

}
?>
