<?php
class Form { //$_REQUEST ?
	private $data;
	public function getData() { return $this->data; }
	public function setData($x) { $this->data = $x; }

	public function __construct($x,$y = false) {
		$this->data =	(count($_GET) > 0 && ! empty($_GET[$x])) ? htmlentities($_GET[$x]) :
						(
							(count($_POST) > 0 && ! empty($_POST[$x])) ?
							htmlentities($_POST[$x]) :
							$y
						);
	}
}
?>