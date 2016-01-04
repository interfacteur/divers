;$(function () {
	"use strict";

	//https://gist.github.com/dperini/729294
	var reURL = /^(?:(?:https?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;




	//Tester tous les proxies d'un seul coup

	$("#proxies").on("submit", function (e) {
		e.preventDefault();
		var url = $("#testProxies").val();
		if (! reURL.test(url))
			return;
		$("form ~ form input:first-of-type").val(url);
		$("form ~ form").trigger("submit");
	});




	//proxy-exemples.html

	$("#proxy").on("submit", function (e) {
		var $inputs = [$("#testP"), $("#resultat1P"), $("#resultat2P"), $("#resultat3P")],
			url = $inputs[0].val(),
			cb = url.split(/(?:&|\?)callback=/),
			fctn = cb.length > 1 ? cb[1].split("&")[0] : undefined;
		e.preventDefault();
		url = url.replace(/(&callback=\w+)|(\?callback=\w+$)|(callback=\w+&)/, "");
		$inputs[1].text("");
		$inputs[2].text("");
		$inputs[3].text("")
		.addClass("outanim");
		if (! reURL.test(url))
			return $inputs[3].removeClass("outanim");
		$.ajax({
			url: "http://www.equatorium.net/e1/ou--outils/proxy.php?query=" + url,
			dataType : fctn ? "jsonp" : this.dataType,
			jsonpCallback : fctn || this.jsonpCallback,
			success: function (got, status, xhr) {
				$inputs[1].text(this.url);
				$inputs[2].text(xhr.getResponseHeader("content-type") || ""); //http://marcgrabanski.com/jquery-ajax-content-type/
				$inputs[3].text(xhr.responseText)
				.removeClass("outanim");
			},
			error: function (xhr, status, err) {
				$inputs[1].text(xhr.responseText + " : " + url);
				$inputs[2].text(err);
				$inputs[3].removeClass("outanim");
	}	});	});




	//proxy2code-exemple.html

	$("#proxyP2C").on("submit", function (e) {
		var $inputs = [$("#testP2C"), $("#resultat1P2C"), $("#resultat2P2C")],
			url = $inputs[0].val();
		e.preventDefault();
		$inputs[1].text("");
		$inputs[2].text("")
		.addClass("outanim");
		if (! reURL.test(url))
			return $inputs[2].removeClass("outanim");
		$.ajax({
			url: "http://www.equatorium.net/e1/ou--outils/proxy2code.php?query=" + url,
			dataType: "text",
			success: function (got, status, xhr) {
				$inputs[1].text(this.url);
				$inputs[2].text(xhr.responseText)
				.removeClass("outanim");
			},
			error: function (xhr, status, err) {
				$inputs[1].text(this.url);
				$inputs[2].text(err)
				.removeClass("outanim");
	}	});	});




	//proxy2json-exemple.html

	$(".formJson").each(function (i) {
		var $inputs = [
			[$("#testPTJ1"), $("[name='cbPTJ1']"), $("#resultatPTJ1A"), $("#resultatPTJ1B")],
			[$("#testPTJ2"), $("[name='cbPTJ2']"), $("#resultatPTJ2A"), $("#resultatPTJ2B")]
		],
		proxies = ["p", "-"];
		$(this).on("submit", function (e) {
			e.preventDefault();
			var url = $inputs[i][0].val(),
				type = $inputs[i][1].filter(":checked").val() || (i == 0 ? 1 : -1);
			$inputs[i][2].html("");
			$inputs[i][3].html("")
			.addClass("outanim");
			if (! reURL.test(url))
				return $inputs[3].removeClass("outanim");
			$.ajax({
				url: "http://www.equatorium.net/e1/ou--outils/proxy2json" + proxies[i] + ".php?query=" + url,
				dataType: type == -1 ? "json" : "jsonp",
				jsonp: type == 0 ? "cb" : this.jsponp,
				jsonpCallback: type == 0 ? "perform" : this.jsonpCallback,
				success: function (got, status, xhr) {
					$inputs[i][2].text(this.url);
					$inputs[i][3].text(xhr.responseText)
					.removeClass("outanim");
				},
				error: function (xhr, status, err) {
					$inputs[i][2].text((xhr.status != 200 ? "(" + xhr.status + ") ": "") + err + ", " + url);
					$inputs[i][3].removeClass("outanim");
	}	});	});	});




	//proxy2text-exemple.html

	$("#proxyP2T").on("submit", function (e) {
		var $inputs = [$("#testP2T"), $("#resultat1P2T"), $("#resultat2P2T")],
			url = $inputs[0].val();
		e.preventDefault();
		$inputs[1].text("");
		$inputs[2].text("")
		.addClass("outanim");
		if (! reURL.test(url))
			return $inputs[2].removeClass("outanim");
		$.ajax({
			url: "http://www.equatorium.net/e1/ou--outils/proxy2text.php?query=" + url,
			dataType: "text",
			success: function (got, status, xhr) {
				$inputs[1].text(this.url);
				$inputs[2].text(xhr.responseText)
				.removeClass("outanim");
			},
			error: function (xhr, status, err) {
				$inputs[1].text(xhr.responseText + " : " + url);
				$inputs[2].removeClass("outanim");
	}	});	});




	//proxy2entetes-exemple.html

	$("#proxyP2E").on("submit", function (e) {
		var $inputs = [$("#testP2E"), $("#resultat1P2E"), $("#resultat2P2E")],
			url = $inputs[0].val();
		e.preventDefault();
		$inputs[1].text("");
		$inputs[2].text("")
		.addClass("outanim");
		if (! reURL.test(url))
			return $inputs[2].removeClass("outanim");
		$.ajax({
			url: "http://www.equatorium.net/e1/ou--outils/proxy2entetes.php?query=" + url,
			dataType: "text",
			success: function (got, status, xhr) {
				$inputs[1].text(this.url);
				$inputs[2].text(xhr.responseText)
				.removeClass("outanim");
			},
			error: function (xhr, status, err) {
				$inputs[1].text(this.url);
				$inputs[2].text(err)
				.removeClass("outanim");
	}	});	});




	//proxy2mime-exemple.html

	$("#proxyP2M").on("submit", function (e) {
		var $inputs = [$("#testP2M"), $("#resultat1P2M"), $("#resultat2P2M")],
			url = $inputs[0].val();
		e.preventDefault();
		$inputs[1].text("");
		$inputs[2].text("")
		.addClass("outanim");
		if (! reURL.test(url))
			return $inputs[2].removeClass("outanim");
		$.ajax({
			url: "http://www.equatorium.net/e1/ou--outils/proxy2mime.php?query=" + url,
			dataType: "text",
			success: function (got, status, xhr) {
				$inputs[1].text(this.url);
				$inputs[2].text(xhr.responseText)
				.removeClass("outanim");
			},
			error: function (xhr, status, err) {
				$inputs[1].text(this.url);
				$inputs[2].text(err)
				.removeClass("outanim");
	}	});	});




	//proxy2info-exemple.html

	$("#proxyP2I").on("submit", function (e) {
		var $inputs = [$("#testP2I"), $("#resultat1P2I"), $("#resultat2P2I")],
			url = $inputs[0].val();
		e.preventDefault();
		$inputs[1].text("");
		$inputs[2].text("")
		.addClass("outanim");
		if (! reURL.test(url))
			return $inputs[2].removeClass("outanim");
		$.ajax({
			url: "http://www.equatorium.net/e1/ou--outils/proxy2info.php?query=" + url,
			dataType: "text",
			success: function (got, status, xhr) {
				$inputs[1].text(this.url);
				$inputs[2].text(xhr.responseText)
				.removeClass("outanim");
			},
			error: function (xhr, status, err) {
				$inputs[1].text(this.url);
				$inputs[2].text(err)
				.removeClass("outanim");
	}	});	});
});

