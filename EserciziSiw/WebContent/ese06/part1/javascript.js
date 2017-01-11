/**
 * Esercizio 06 javascript
 */

function insertName() {
	var name = prompt("Inserisci nome e cognome");
	alert("Benvenuto " + name)
	document.write("<p class=\"messaggi\">Benvenuto " + name + "</p");
	return name;
}

var name = window.onload = insertName();