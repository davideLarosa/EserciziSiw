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
	// var name = $("#name").val();
	// var surname = $("#surname").val();
	// var phone = $("#phone").val();
	// var email = $("#email").val();

	var inputs = $("#lastRow").find("input");

	var inputFields = inputs.eq(0);
	var name = inputFields.val();

	var inputFields = inputs.eq(1);
	var surname = inputFields.val();

	var inputFields = inputs.eq(2);
	var phone = inputFields.val();

	var inputFields = inputs.eq(3);
	var email = inputFields.val();

	return new Contatto(name, surname, phone, email);
}

function addContact() {
	var contatto = createContact();
	// Contatti.push(contatto);
	pushContatto(contatto);
	showContactOnPage();
}

function pushContatto(contatto) {
	var contattoJson = {
		name : contatto.name,
		surname : contatto.surname,
		phone : contatto.phone,
		email : contatto.email
	};

	$.ajax({
		type : "POST",
		url : "../cmajax",
		datatype : "json",
		data : {
			contatto : JSON.stringify(contattoJson),
		},
		success : function(data) {
			var tbody = $("tbody");
			var lastRow = tbody.last();
			var tr = $("<tr></tr>");
			tr.html(data);
			var lastRow = $("#lastRow");
			lastRow.before(tr);
		}
	});
}

function showContactOnPage() {
	var contact = Contatti[Contatti.length - 1];
	// var lastRow = document.getElementById("lastRow");
	// var tbody = document.getElementById("tbody");
	// var tr = document.createElement("tr");
	var lastRow = $("#lastRow");
	var tbody = $("#tbody");
	var tr = $("<tr></tr>");

	// var tdName = document.createElement("td");
	// tdName.textContent = contact.name;

	var tdName = $("<td></td>");
	tdName.text(contact.name);

	// var tdSurname = document.createElement("td");
	// tdSurname.textContent = contact.surname;

	var tdSurname = $("<td></td>");
	tdSurname.text(contact.surname);

	// var tdPhone = document.createElement("td");
	// tdPhone.textContent = contact.phone;
	var tdPhone = $("<td></td>");
	tdPhone.text(contact.phone);

	// var tdEmail = document.createElement("td");
	// tdEmail.textContent = contact.email;
	var tdEmail = $("<td></td>");
	tdEmail.text(contact.email);

	// var tdRemove = document.createElement("td");
	// var removeButton = document.createElement("button");
	// removeButton.textContent = "Remove Contact";
	// removeButton.addEventListener("click", function() {
	// tbody.removeChild(tr);
	// });
	// tdRemove.appendChild(removeButton);

	var tdRemove = $("<td></td>");
	var removeButton = $("<button></button>");
	removeButton.text("Remove Contact");
	removeButton.on("click", function() {
		tr.remove();
		Contatti.remove(contact);
	});

	// var tdModify = document.createElement("td");
	// var modifyButton = document.createElement("button");
	// modifyButton.textContent = "Modify";
	// modifyButton.addEventListener("click", function() {
	// var newContatto = new Contatto();
	// newContatto.name = prompt("Inserisci nuovo nome");
	// newContatto.surname = prompt("Inserisci nuovo cognome");
	// newContatto.phone = prompt("Inserisci nuovo telefono");
	// newContatto.email = prompt("Inserisci nuova email");
	//
	// tdName.textContent = newContatto.name;
	// tdSurname.textContent = newContatto.surname;
	// tdPhone.textContent = newContatto.phone;
	// tdEmail.textContent = newContatto.email;
	// });
	// tdModify.appendChild(modifyButton);

	var tdModify = $("<td></td>");
	var modifyButton = $("<button></button>");
	modifyButton.text("Modify");
	modifyButton.on("click", function() {
		var newContatto = new Contatto();
		newContatto.name = prompt("Inserisci nuovo nome");
		newContatto.surname = prompt("Inserisci nuovo cognome");
		newContatto.phone = prompt("Inserisci nuovo telefono");
		newContatto.email = prompt("Inserisci nuova email");

		tdName.text(newContatto.name);
		tdSurname.text(newContatto.surname);
		tdPhone.text(newContatto.phone);
		tdEmail.text(newContatto.email);
	});
	tdModify.append(modifyButton);

	// if (tdName.textContent != "" && tdSurname.textContent != ""
	// && tdPhone.textContent != "" && tdEmail.textContent != "") {
	// tr.appendChild(tdName);
	// tr.appendChild(tdSurname);
	// tr.appendChild(tdPhone);
	// tr.appendChild(tdEmail);
	// tr.appendChild(tdRemove);
	// tr.appendChild(tdModify);
	// tbody.insertBefore(tr, lastRow);

	if (tdName.text() != "" && tdSurname.text() != "" && tdPhone.text() != ""
			&& tdEmail.text() != "") {
		tr.append(tdName);
		tr.append(tdSurname);
		tr.append(tdPhone);
		tr.append(tdEmail);
		tr.append(tdRemove);
		tr.append(tdModify);

		lastRow.before(tr);
	} else {
		alert("Completa tutti i campi");
	}
	if ($("#submit").val() == null)
		addSubmitButton();
}

function addSubmitButton() {
	// document.getElementById("form").onsubmit = function(e) {
	// e.preventDefault();
	// };
	// var tbody = document.getElementById("tbody");
	// var tr = document.createElement("tr");
	// var td = document.createElement("td");
	// var submit = document.createElement("button");
	// submit.textContent = "Submit";
	// submit.setAttribute("type", "submit");
	// submit.setAttribute("id", "submit");
	// submit.addEventListener("click", function() {
	// alert("Submitted");
	// });
	// td.appendChild(submit);
	// tr.appendChild(td);
	// tbody.appendChild(tr);

	var tbody = $("#tbody");
	var tr = $("<tr></tr>");
	var td = $("<td></td>");
	var submit = $("<button></button>");
	submit.text("Submit");
	submit.attr("type", "submit");
	submit.attr("id", "submit");
	submit.on("click", function() {
		alert("Submitted");
	});
	td.append(submit);
	tr.append(td);
	tbody.append(tr);

}

function init() {
	// var addButton = document.getElementById("add");
	// addButton.addEventListener('click', addContact);
	//
	// var resetButton = document.getElementById("reset");
	// resetButton.addEventListener("click", function() {
	// document.getElementById("name").value = "";
	// document.getElementById("surname").value = "";
	// document.getElementById("phone").value = "";
	// document.getElementById("email").value = "";
	// });

	var addButton = $("#add");
	addButton.on("click", addContact);

	var showButton = $("#mostraContatti");
	showButton.on("click", loadContacts);

	var resetButton = $("#reset");
	resetButton.on("click", function() {
		$("#name").val("");
		$("#surname").val("");
		$("#phone").val("");
		$("#email").val("");
	});

	addSearchButtons();
}

function loadContacts() {
	$.ajax({
		url : "../cmajax",
		success : function(data) {
			$('#listaContatti').html(data);
		}
	});
}

function addSearchButtons() {
	// var firstRow = document.getElementById("firstRow");
	// var thead = document.getElementById("thead");
	// var tr = document.createElement("tr");
	// var thName = document.createElement("th");
	// var thSurname = document.createElement("th");
	// var thPhone = document.createElement("th");
	// var thEmail = document.createElement("th");

	var firstRow = $("#firstRow");
	var thead = $("#thead");
	var tr = $("<tr></tr>");
	var thName = $("<th></th>");
	var thSurname = $("<th></th>");
	var thPhone = $("<th></th>");
	var thEmail = $("<th></th>");

	// var findByName = document.createElement("button");
	// findByName.textContent = "Find by Name";
	// findByName.addEventListener("click", function() {
	// var name = prompt("Inserisci nome");
	// find("name", name);
	// });
	// thName.appendChild(findByName);
	// tr.appendChild(thName);

	var findByName = $("<button></button>");
	findByName.text("Find by Name");
	findByName.on("click", function() {
		var name = prompt("Inserisci nome");
		_find("name", name);
	});
	thName.append(findByName);
	tr.append(thName);

	// var findBySurname = document.createElement("button");
	// findBySurname.textContent = "Find by Surname";
	// findBySurname.addEventListener("click", function() {
	// var surname = prompt("Inserisci cognome");
	// find("surname", surname);
	// });
	// thSurname.appendChild(findBySurname);
	// tr.appendChild(thSurname);

	var findBySurname = $("<button></button>");
	findBySurname.text("Find by Surname");
	findBySurname.on("click", function() {
		var surname = prompt("Inserisci cognome");
		_find("surname", surname);
	});
	thSurname.append(findBySurname);
	tr.append(thSurname);

	// var findByPhone = document.createElement("button");
	// findByPhone.textContent = "Find by Phone";
	// findByPhone.addEventListener("click", function() {
	// var phone = prompt("Inserisci telefono");
	// find("phone", phone);
	// });
	// thPhone.appendChild(findByPhone);
	// tr.appendChild(thPhone);

	var findByPhone = $("<button></button>");
	findByPhone.text("Find by Phone");
	findByPhone.on("click", function() {
		var phone = prompt("Inserisci telefono");
		_find("phone", phone);
	});
	thPhone.append(findByPhone);
	tr.append(thPhone);

	// var findByEmail = document.createElement("button");
	// findByEmail.textContent = "Find by Email";
	// findByEmail.addEventListener("click", function() {
	// var email = prompt("Inserisci email");
	// find("email", email);
	// });
	// thEmail.appendChild(findByEmail);
	// tr.appendChild(thEmail);

	var findByEmail = $("<button></button>");
	findByEmail.text("Find by Email");
	findByEmail.on("click", function() {
		var email = prompt("Inserisci email");
		_find("email", email);
	});
	thEmail.append(findByEmail);
	tr.append(thEmail);

	var colorChangerButton = $("#colorChangerBtn");
	colorChangerButton.on("click", function() {
		$("body").css({
			"background-color" : "red"
		});
	});

	// thead.insertBefore(tr, firstRow);
	firstRow.before(tr);
}

function _find(attrib, text) {
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

// window.addEventListener("load", init);
$(document).ready(init);