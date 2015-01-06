<?php
class ConfigOpus {

	static $confPag = 9; //nombre par défaut d'oeuvres présentées par page (conserver de préférence un multiple de 9, ou de 3)

	static $confMax = 63; //nombre maximal d'oeuvres présentées par page (conserver de préférence un multiple de 9, ou de 3)
		/* repris dans subj.oldUA.css.php */

	static function confPhoto() { //auteur des photos (les versions linguistiques absentes sont compensées par la version par défaut)
		return array(
			"fr" => "Photos de Amecico Mariano, Anthony Humbert &amp; Patrick A. Martin.",
			"en" => "Photos by Amecico Mariano, Anthony Humbert &amp; Patrick A. Martin."
	);	}

	static function confOpen() { //lien d'ouverture popup (versions linguistiques absentes sont compensées par la version par défaut)
		return array(
			"fr" => "Nouvelle fenêtre",
			"en" => "New window"
	);	}

	static function confClose() { //lien de fermeture popup (versions linguistiques absentes sont compensées par la version par défaut)
		return array(
			"fr" => "Fermer",
			"en" => "Close"
	);	}

	static function confOpus() { //ensemble des oeuvres (versions linguistiques absentes sont compensées par la version par défaut)
		return array(
			"fr" => array(
				"photo001.jpg"	=> "AUTOPORTRAIT - Collages &amp; Acrylique sur toile - 80x60",
				"photo002.jpg"	=> "Subj devant les TWINS &amp; Les 750 petits portraits de sa Chronique du XXème siècle - Espace BATEAU LAVOIR (2002)",
				"photo003.jpg"	=> "Quelques uns des 750 petits portraits de sa chronique du XXème siècle",
				"photo004.jpg"	=> "Subj devant les TWINS à l'Espace François MITTERAND",
				"photo005.jpg"	=> "LES TWINS - 11 Septembre - Collages &amp; Acrylique sur toile - 280x190",
				"photo006.jpg"	=> "GUERRE &amp; PAIX - Collages &amp; Acrylique sur toile - 150x450 - Hall d'entrée de la Gare TGV Meuse",
				"photo007.jpg"	=> "GUERRE &amp; PAIX (détail) - Collages &amp; Acrylique sur toile - 150x450",
				"photo008.jpg"	=> "FOULTITUDE A Saute Souvenance - Collages &amp; Acrylique sur toile - 190x280",
				"photo009.jpg"	=> "De sa Chronique du XXème Siècle - LES CHRISTS REVISITES - Collages &amp; Acrylique sur toile - 190x280",
				"photo010.jpg"	=> "LES CHRISTS REVISITES (détail)",
				"photo011.jpg"	=> "De la série des PALIMPSESTES - Impressions - Collages &amp; Acrylique sur toile - 55x46",
				"photo012.jpg"	=> "De la série des rêves freudiens, LE REVE DE L'OPERA - Collages &amp; Acrylique sur toile - 130x97",
				"photo013.jpg"	=> "De sa Chronique du XXème siècle HISTOIRES DE FEMMES - Collages &amp; Acrylique sur toile - 60x120",
				"photo014.jpg"	=> "NUDUS - Gisante - Collages &amp; Acrylique sur toile - 60x73",
				"photo015.jpg"	=> "De la série des Parcs &amp; Jardins LA FORET IMAGINAIRE - Collages &amp; Acrylique sur toile - 190x280",
				"photo016.jpg"	=> "EMPREINTE BLEUE ou après la Tempête - Collages &amp; Acrylique sur toile - 100x81",
				"photo017.jpg"	=> "LA FRANCE BLESSEE - Collages &amp; Acrylique sur toile - 100x100",
				"photo018.jpg"	=> "De la série des Parcs &amp; Jardins LA TEMPETE - Collages &amp; Acrylique sur toile - 100x81",
				"photo019.jpg"	=> "De la série des Parcs &amp; Jardins PAYSAGES RECOMPOSES - L'étang - Collages &amp; Acrylique sur toile - 100x80",
				"photo020.jpg"	=> "De la série des Parcs &amp; Jardins PAYSAGES RECOMPOSES - Collages &amp; Acrylique sur toile - 100x80",
				"photo021.jpg"	=> "De la série des chefs d'oeuvres revisités - LE RADEAU DE LA MEDUSE d'après Géricault - Collages &amp; Acrylique sur toile - 80x80",
				"photo022.jpg"	=> "De la série des chefs d'oeuvres revisités - A LA RECHERCHE DE SARDANAPALE d'après Delacroix - Collages &amp; Acrylique sur toile - 114x146",
				"photo023.jpg"	=> "De la série des chefs d'oeuvres revisités - HECTOR &amp; ANDROMAQUE d'après Chirico - Collages &amp; Acrylique sur toile - 81x60",
				"photo024.jpg"	=> "De la série des chefs d'oeuvres revisités - DANAE d'après Klimt - Collages &amp; Acrylique sur toile - 60x60",
				"photo025.jpg"	=> "De la série des chefs d'oeuvres revisités - LA SIESTE, TAHITI d'après Gauguin - Collages &amp; Acrylique sur toile - 65x92",
				"photo026.jpg"	=> "De la série des chefs d'oeuvres revisités - DANAE d'après le Titien - Collages &amp; Acrylique sur toile - 65x81",
				"photo027.jpg"	=> "De la série des chefs d'oeuvres revisités - LA VIERGE DU CHANCELIER ROLIN d'après Van Eyck - Collages &amp; Acrylique sur toile - 80x80",
				"photo028.jpg"	=> "De la série des chefs d'oeuvres revisités - LES SABINES d'après David - Collages &amp; Acrylique sur toile - 97x130",
				"photo029.jpg"	=> "De la série des Autodafés - LA GRANDE PEUR DU LOUP - Collages &amp; Acrylique sur toile - 100x100",
				"photo030.jpg"	=> "De la série des Autodafés - AUTODAFE D'UN ROMAN PHOTOS - Collages &amp; Acrylique sur toile - 100x100",
				"photo031.jpg"	=> "AUTODAFE - Installation",
				"photo032.jpg"	=> "Subj travaillant à sa fresque de l'ANDRA 2m80 x 9m - Collages &amp; Acrylique sur toile",
				"photo040.jpg"	=> "RECONCILIATION FRANCO ALLEMANDE - Mémorial Charles de Gaulle",
				"photo041.jpg"	=> "SOULAINES DHUYS - Mémoires",
				"photo042.jpg"	=> "Habillage des Archives d'AREVA, oeuvre de 1.600m2 sur le thème des serres en collaboration avec l'équipe d'Art on Wall"
	)	);	}
}
?>







































