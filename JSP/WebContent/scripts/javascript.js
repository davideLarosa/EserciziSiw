function Contatto(nome, cognome, telefono, email) {
	this.nome = nome;
	this.cognome = cognome;
	this.telefono = telefono;
	this.email = email;
}

function Telefono(codiceImei, modello, sistemaOperativo) {
	this.codiceImei = codiceImei;
	this.modello = modello;
	this.sistemaOperativo = sistemaOperativo;
}

function init() {
	var butAggiungiContatto = $("#addContatto");
	butAggiungiContatto.on("click", nuovoContatto);

	var butAggiungiTelefono = $("#addTelefono");
	butAggiungiTelefono.on("click", nuovoTelefono);

}

function nuovoContatto() {
	var c = creaContatto();
	aggiungiContatto(c);
}

function nuovoTelefono() {
	var c = creaTelefono();
	aggiungiTelefono(c);

}

function creaContatto() {
	var inputs = $("#lastRowContatto").find("input");
	var nome = inputs.eq(0).val();
	var cognome = inputs.eq(1).val();
	var telefono = inputs.eq(2).val();
	var email = inputs.eq(3).val();
	var contatto = new Contatto(nome, cognome, telefono, email);
	return contatto;
}

function creaTelefono() {
	var inputs = $("#lastRowTelefono").find("input");
	var codiceImei = inputs.eq(0).val();
	var modello = inputs.eq(1).val();
	var sistemaOperativo = inputs.eq(2).val();
	var telefono = new Telefono(codiceImei, modello, sistemaOperativo);
	return telefono;
}
function aggiungiContatto(nuovoContatto) {
	var jsonContatto = {
		nome : nuovoContatto.nome,
		cognome : nuovoContatto.cognome,
		telefono : nuovoContatto.telefono,
		email : nuovoContatto.email
	}
	$.ajax({
		type : "POST",
		url : "popolaDB",
		datatype : "json",
		data : {
			nuovoContatto : JSON.stringify(jsonContatto)
		},
		success : function(data) {
			var tr = $("<tr></tr>");
			tr.html(data);
			var lastRow = $("#lastRowContatto");
			lastRow.before(tr);
		}
	});
}

function aggiungiTelefono(telefono) {
	var jsonTelefono = {
		codiceImei : telefono.codiceImei,
		modello : telefono.modello,
		sistemaOperativo : telefono.sistemaOperativo
	}
	$.ajax({
		type : "POST",
		url : "popolaDB",
		datatype : "json",
		data : {
			nuovoTelefono : JSON.stringify(jsonTelefono),
		},
		success : function(data) {
			var tr = $("<tr></tr>");
			tr.html(data);
			var lastRow = $("#lastRowTelefono");
			lastRow.before(tr);
		}
	});
}

$(document).ready(init);