$.getJSON(url)
.then(function (data) { //then comme fonction jQuery ou ES6 ?
	console.log(data);
});


(function () {
	return $.getJSON(url)
})()
.then(function (v) {
	console.log(v);
});


Promise.resolve($.getJSON(url))
.then(function (v) {
	console.log(v);
});


new Promise(function (rs) {
	$.getJSON(url, function (got) { rs(got); })
})
.then(function (v) {
	console.log(v);
});


Promise.all([
	$.getJSON(url)
])
.then(function (v) {
	console.log(v[0]);
});





/////////////////





$.getJSON(url)
.then(function (data) { //then comme fonction jQuery ou ES6 ?
	console.log(data);
});

(function () {
	return $.ajax({url: url})
})().then(function (v) {
	console.log(v);
});

new Promise(function (rs) {
	$.ajax({
		url: url,
		success: function (got) {
			rs(got);
		}
	})
}).then(function (v) {
	console.log(v);
});

Promise.resolve($.ajax({url: url}))
.then(function (v) {
	console.log(v);
});






Promise.all([
	$.ajax({
		url: url
	})
]).then(function (v) {
	console.log(v[0]);
});
