/**
 * 
 */

function check() {
	var answer = document.getElementById("checkbox").checked;
	return answer;
}

function getAnswer() {
	var _true = "Autorizzazione concessa";
	var _false = "Autorizzazione non concessa";
	var answer;
	if (check()) {
		answer = document.createTextNode(_true);
	} else {
		answer = document.createTextNode(_false);
	}

	if (document.getElementById("resp") == null) {
		var paragraph = document.createElement("p");
		paragraph.setAttribute("id", "resp");
		paragraph.appendChild(answer);
		document.getElementById("Dati personali").appendChild(paragraph);

	} else {
		document.getElementById("resp").textContent = answer.textContent;

	}
	window.confirm(answer.textContent);
}