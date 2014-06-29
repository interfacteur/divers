//calculer les contrastes
	//http://www.w3.org/TR/WCAG20-TECHS/G17.html
	//http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
//sur un ratio entre deux couleurs

/* contrasteEvaluer
@return		nombre flottant

@param		nombre entier	r	La valeur décimale du rouge de la couleur 1
@param		nombre entier	g	La valeur décimale du vert de la couleur 1
@param		nombre entier	b	La valeur décimale du bleu de la couleur 1
@param		nombre entier	R	La valeur décimale du rouge de la couleur 2
@param		nombre entier	G	La valeur décimale du vert de la couleur 2
@param		nombre entier	B	La valeur décimale du bleu de la couleur 2
*/

function contrasteEvaluer(r,g,b,R,G,B) {
	var L1 = luminanceCalculer(r,g,b),
		L2 = luminanceCalculer(R,G,B);
	return L1 > L2 ? (L1 + 0.05) / (L2 + 0.05) : (L2 + 0.05) / (L1 + 0.05);
}

function luminanceCalculer(r,g,b) {
	return 0.2126 * hexaTraiter(r) + 0.7152 * hexaTraiter(g) + 0.0722 * hexaTraiter(b);
}

function hexaTraiter(n) {
	n /= 255;
	return n < 0.03928 ? n / 12.92 : Math.pow(((n + 0.055) / 1.055), 2.4);
}


