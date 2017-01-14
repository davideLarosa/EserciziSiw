/**
 * 
 */

var Contatti = [];

function Contatto(name, surname, phone, email) {
	this.name = name;
	this.surname = surname;
	this.phone = phone;
	this.email = email;
}

function createContact() {
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	return new Contatto(name, surname, phone, email);
}

function addContact() {
	var contatto = createContact();
	Contatti.push(contatto);
	showContactOnPage();
}

function showContactOnPage() {
	var contact = Contatti[Contatti.length - 1];
	var lastRow = document.getElementById("lastRow");
	var tbody = document.getElementById("tbody");
	var tr = document.createElement("tr");

	var tdName = document.createElement("td");
	tdName.textContent = contact.name;

	var tdSurname = document.createElement("td");
	tdSurname.textContent = contact.surname;

	var tdPhone = document.createElement("td");
	tdPhone.textContent = contact.phone;

	var tdEmail = document.createElement("td");
	tdEmail.textContent = contact.email;

	var tdRemove = document.createElement("td");
	var removeButton = document.createElement("button");
	removeButton.textContent = "Remove Contact";
	removeButton.addEventListener("click", function() {
		tbody.removeChild(tr);
	});
	tdRemove.appendChild(removeButton);

	var tdModify = document.createElement("td");
	var modifyButton = document.createElement("button");
	modifyButton.textContent = "Modify";
	modifyButton.addEventListener("click", function() {
		var newContatto = new Contatto();
		newContatto.name = prompt("Inserisci nuovo nome");
		newContatto.surname = prompt("Inserisci nuovo cognome");
		newContatto.phone = prompt("Inserisci nuovo telefono");
		newContatto.email = prompt("Inserisci nuova email");

		tdName.textContent = newContatto.name;
		tdSurname.textContent = newContatto.surname;
		tdPhone.textContent = newContatto.phone;
		tdEmail.textContent = newContatto.email;
	});
	tdModify.appendChild(modifyButton);

	if (tdName.textContent != "" && tdSurname.textContent != ""
			&& tdPhone.textContent != "" && tdEmail.textContent != "") {
		tr.appendChild(tdName);
		tr.appendChild(tdSurname);
		tr.appendChild(tdPhone);
		tr.appendChild(tdEmail);
		tr.appendChild(tdRemove);
		tr.appendChild(tdModify);
		tbody.insertBefore(tr, lastRow);
	} else {
		alert("Completa tutti i campi");
	}
	if (document.getElementById("submit") == null)
		addSubmitButton();
}

function addSubmitButton() {
	document.getElementById("form").onsubmit = function(e) {
		e.preventDefault();
	};
	var tbody = document.getElementById("tbody");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var submit = document.createElement("button");
	submit.textContent = "Submit";
	submit.setAttribute("type", "submit");
	submit.setAttribute("id", "submit");
	submit.addEventListener("click", function() {
		alert("Submitted");
	});
	td.appendChild(submit);
	tr.appendChild(td);
	tbody.appendChild(tr);

}

function init() {
	var addButton = document.getElementById("add");
	addButton.addEventListener('click', addContact);

	var resetButton = document.getElementById("reset");
	resetButton.addEventListener("click", function() {
		document.getElementById("name").value = "";
		document.getElementById("surname").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("email").value = "";
	});

	addSearchButtons();
}

function addSearchButtons() {
	var firstRow = document.getElementById("firstRow");
	var thead = document.getElementById("thead");
	var tr = document.createElement("tr");
	var thName = document.createElement("th");
	var thSurname = document.createElement("th");
	var thPhone = document.createElement("th");
	var thEmail = document.createElement("th");

	var findByName = document.createElement("button");
	findByName.textContent = "Find by Name";
	findByName.addEventListener("click", function() {
		var name = prompt("Inserisci nome");
		find("name", name);
	});
	thName.appendChild(findByName);
	tr.appendChild(thName);

	var findBySurname = document.createElement("button");
	findBySurname.textContent = "Find by Surname";
	findBySurname.addEventListener("click", function() {
		var surname = prompt("Inserisci cognome");
		find("surname", surname);
	});
	thSurname.appendChild(findBySurname);
	tr.appendChild(thSurname);

	var findByPhone = document.createElement("button");
	findByPhone.textContent = "Find by Phone";
	findByPhone.addEventListener("click", function() {
		var phone = prompt("Inserisci telefono");
		find("phone", phone);
	});
	thPhone.appendChild(findByPhone);
	tr.appendChild(thPhone);

	var findByEmail = document.createElement("button");
	findByEmail.textContent = "Find by Email";
	findByEmail.addEventListener("click", function() {
		var email = prompt("Inserisci email");
		find("email", email);
	});
	thEmail.appendChild(findByEmail);
	tr.appendChild(thEmail);

	thead.insertBefore(tr, firstRow);
}

function find(attrib, text) {
	var trovato = false;
	for (var i = 0; i < Contatti.length; i++) {
		if (Contatti[i][attrib] == text) {
			showContact(Contatti[i]);
			trovato = true;
		}
	}
	if (!trovato)
		alert("Contatto non trovato");
}

function showContact(cont) {
	alert("Nome " + cont.name + " Cognome " + cont.surname + " Tel "
			+ cont.phone + " Email " + cont.email);
}

window.addEventListener("load", init);