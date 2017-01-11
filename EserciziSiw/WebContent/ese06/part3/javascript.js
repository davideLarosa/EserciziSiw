/**
 * 
 */

class Persona {
	constructor(name, surname, address) {
		this.name = name;
		this.surname = surname;
		this.address = address;
	}
	
	 getName(){
		return this.name;
	}
	 
	 getSurname(){
		 return this.surname;
	 }
	 
	 getAddress(){
		 return this.address;
	 }
}
var admin =[
	new Persona("Davide", "Larosa", "Lepanto 92"),
	new Persona("Kristian", "Reale", "Studio 2"),
	new Persona("Giovanni", "Grasso", "Studio 1")
	];

function writeAdmins() {
	var paragraph = document.createElement("p");
	paragraph.setAttribute("id", "pAdmins");
	for(i = 0; i < admin.length; i++){
		var toAppend = document.createTextNode(admin[i].getName() + " " +admin[i].getSurname() + ", ");
		paragraph.appendChild(toAppend);
	}
	document.getElementById("admins").appendChild(paragraph);
}


function login() {
	var _formData = new FormData(document.getElementById("user"));
	var name = _formData.get("name");
	var surname = _formData.get("surname");
	if(isAdmin(name, surname)){
		alert("You are an admin");
	} else{
		alert("You are not an admin");		
	}
	
}

function isAdmin(name, surname) {
	for(i = 0; i < admin.length; i++){
		if((admin[i].getName() == name) && (admin[i].getSurname() == surname)){
			return true;
		}
	}
	return false;
}