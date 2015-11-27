/* Gaëtan Langhade, Interfacteur, novembre 2015

Patch pour conserver la syntaxe standard de l'API history avec history.js https://github.com/browserstate/history.js

Exemple : https://github.com/interfacteur/github-api/blob/master/js/appli-dev.js
à partir de https://github.com/interfacteur/github-api/blob/master/js/utils.js#L173 */


history = window.History;
history.state = history.getState().data;
history.state.step = 0;
history.Adapter.bind(window, "statechange", function(){
	history.state = history.getState().data;
});