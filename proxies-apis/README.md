Proxies
========

Ensemble de proxies initialement destinés à tester des APIs.

Les proxies sont servis (à usage privé) sur http://www.equatorium.net/e1/ou--outils et testables sur http://www.equatorium.net/e1/ou--outils/proxies-tests.html

* Page de test proxies-tests.html et -media/proxies-tests.js : tester tous les proxies cf. http://www.equatorium.net/e1/ou--outils/proxies-tests.html

* Proxy proxy.php : retour du fichier dans son type MIME d'origine
cf. www.equatorium.net/e1/ou--outils/proxy-exemples.html

* Proxy textuel proxy2text.php : retour du fichier en "text/plain" quelque soit son type MIME d'origine
cf. http://www.equatorium.net/e1/ou--outils/proxy2text-exemples.html

* Proxy JSON-P proxy2jsonp.php : retour JSON-P encapsulé par une fonction de callback manuelle ou jQuery
cf. http://www.equatorium.net/e1/ou--outils/proxy2json-exemples.html

* Proxy JSON ou JSON-P proxy2json-.php : retour JSON, ou JSON-P encapsulé par une fonction de callback manuelle ou jQuery
cf. http://www.equatorium.net/e1/ou--outils/proxy2json-exemples.html

* Proxy de prospection proxy2info.php : retour en JSON du type MIME et du code HTTP reçus avec le fichier (-1 pour un domaine inexistant), ainsi que de la mention des formats JSON et JSON-P le cas échéant
cf. http://www.equatorium.net/e1/ou--outils/proxy2info.php

* Proxy de type MIME proxy2mime.php : retour en JSON du type MIME et du code HTTP reçus avec le fichier (-1 pour un domaine inexistant)
cf. http://www.equatorium.net/e1/ou--outils/proxy2mime-exemples.html

* Proxy de code HTTP proxy2code.php : retour en JSON de l'en-tête de statut HTTP reçue avec le fichier, ainsi que de l'en-tête "Status" (API de Github) ; ou -1 pour un domaine inexistant
cf. http://www.equatorium.net/e1/ou--outils/proxy2code-exemples.html

*  Proxy d'en-têtes HTTP proxy2entetes.php : retour des en-têtes HTTP reçues avec le fichier
cf. http://www.equatorium.net/e1/ou--outils/proxy2entetes-exemples.html



APIs
========

* fichiers HTML, JSON, JSON-P, JSON/JSON-P, texte et XML servis avec cross-domain via header("Access-Control-Allow-Origin: *").

* fichiers HTML, JSON, JSON-P, JSON/JSON-P, texte et XML servis sans cross-domain.



INTERFACES DE TESTS
========

* cross-avec-jquery.xdomainrequest.html : tests de requêtes unifiées sur APIs JSON et JSON-P, avec la librairie jQuery-ajaxTransport-XDomainRequest pour IE
cf. http://www.equatorium.net/e1/+tests/cross-avec-jquery.xdomainrequest.html

* cross-sans-jquery.xdomainrequest.html : tests de requêtes unifiées sur APIs JSON et JSON-P, sans la librairie jQuery-ajaxTransport-XDomainRequest pour IE
cf. http://www.equatorium.net/e1/+tests/cross-sans-jquery.xdomainrequest.html
