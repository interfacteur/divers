<?php
include(PATH."classes/FigTriX.php");

class FigurePop extends FigTriX { /* popup */
	public function __construct($p,$k,$v,$lgopus,$l,$lgclose) {
		parent::__construct($p,$k,$v,$lgopus);
		$link = ConfigOpus::confClose();
		$this->figure[0] .= 'javascript:self.close();" title="'.$l.'"'.($lgclose !== null ? ' lang="'.$lgclose.'"' : '').'>'.PHP_EOL;
}	}
?>

