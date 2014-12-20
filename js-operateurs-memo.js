/* Mémo sur les opérateurs JavaScript
	Interfacteur 2014 */

! String() / Number([1]) === Boolean(new String()) - "";
// conversion d'une chaîne vide à true par l'opérateur logique, puis à 1 dans une exécution numérique
// conversion d'un tableau en chaîne par toString(), puis en nombre dans une exécution numérique
// conversion de true, valeur booléenne d'un objet, à 1 dans une exécution numérique
// conversion d'une chaîne vide à 0 dans une exécution numérique


! String() === ! 0;


! Boolean() === Boolean(new Boolean(false));


! Boolean([]) === Boolean(Number([]));


Boolean([]) === Boolean(! String() / Number([1]));


true === Boolean((Boolean(String()) + Boolean(Number()) + Boolean(new String())) / Boolean(Array()));



/* */


typeof ! null === typeof(null === "object");



/* */


true === ! ("0" - 0);


Boolean("0" - 0) === ! Boolean("0" + 0);


("4" + 4 == "4" * 11) === ("4" + 4 !== "4" * 11);


var n = 1;
(1 === n++) === (3 === ++n);


(("4" - 0) * "4" + "4") - -1 === 3 * 5 * 11;
