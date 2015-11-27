//https://github.com/browserstate/history.js

history = window.History;
history.state = history.getState().data;
history.state.step = 0;
history.Adapter.bind(window, "statechange", function(){
	history.state = history.getState().data;
});