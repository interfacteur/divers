<?php
include("includes/_phase.php"); 
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr" xml:lang="fr">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Dolce Gusto : commentaires Facebook de La Machine</title>
<style type="text/css">
html, body, iframe,
h1, h2, h3, h4, h5, h6,
hr, div, span,
a, img, a img, applet, object, embed,
p, sub, sup, strong, b, em, i, blockquote, cite, q, abbr, acronym,
pre, address, kbd, samp, var, code, del, ins, dfn, 
ul, ol, li, dl, dd, dt,
form, fieldset, legend, label, input, textarea, button, select, optgroup, option,
table, caption, tbody, tfoot, thead, tr, th, td	{
	border: 0;
	margin: 0;
	padding: 0;
}
body	{
	border-top: 10px solid #BEA68C;
}
</style>
<script type="text/javascript">
/* <![CDATA[ */
<?php
echo 'var ffbb = ["'.$appid.'","'.$urlFB.'","'.$appns.'"];
'; /* cf. _phase.php */
?>
window.fbAsyncInit = function(){
	FB.init({
		appId      : ffbb[0],
		channelUrl : ffbb[1],
		status     : true, 
		cookie     : true, 
		xfbml      : true  
});	}
/* ]]> */
</script>
</head>

<body>

<div id="fb-root"></div>
<script src="http://connect.facebook.net/fr_FR/all.js" id="facebook-jssdk" async="async" type="text/javascript"></script> 

<script type="text/javascript">
/* <![CDATA[ */
if (location.search.indexOf("ateliers-") < 2 || location.search.indexOf("exposition-") < 2){ // < 2 : ne pas se demander si IE
	//ne pas passer par la variable racine : pas de post de commentaires en dev
	document.write('<div class="fb-comments" data-href="http://' + location.hostname + '/' + location.search.split('=')[1] + '" data-num-posts="5" data-width="590"></div>');
}
/* ]]> */
</script>

</body>
</html>
