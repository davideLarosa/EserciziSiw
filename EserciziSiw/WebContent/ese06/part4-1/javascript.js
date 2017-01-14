/**
 * 
 */

var pSize = prompt("dimesione tag p");
while (pSize <= 0 || pSize > 100 || isNaN(pSize)) {
	pSize = prompt("dimensione tag p");
}

var pColor = prompt("colore tag p (r/g/b/w)");
while (pColor != "r" && pColor != "g" && pColor != "b" && pColor != "w") {
	pColor = prompt("colore tag p (r/g/b/w)");
}

var h1Size = prompt("dimesione tag h1");
while (h1Size <= 0 || h1Size > 100 || isNaN(h1Size)) {
	h1Size = prompt("dimensione tag h1");
}

var h1Color = prompt("colore tag h1 (r/g/b/w)");
while (h1Color != "r" && h1Color != "g" && h1Color != "b" && h1Color != "w") {
	h1Color = prompt("colore tag h1 (r/g/b/w)");
}

var bodySize = prompt("dimesione tag body");
while (bodySize <= 0 || bodySize > 100 || isNaN(bodySize)) {
	bodySize = prompt("dimensione tag body");
}

var bodyColor = prompt("colore tag body (r/g/b/w)");
while (bodyColor != "r" && bodyColor != "g" && bodyColor != "b"
		&& bodyColor != "w") {
	bodyColor = prompt("colore tag body (r/g/b/w)");
}

var bgColor = prompt("colore di sfondo (r/g/b/w)");
while (bgColor != "r" && bgColor != "g" && bgColor != "b" && bgColor != "w") {
	bgColor = prompt("colore tag sfondo (r/g/b/w)");
}

pColor = setColor(pColor);
bodyColor = setColor(bodyColor);
h1Color = setColor(h1Color);
bgColor = setColor(bgColor);

function setColor(tag) {
	switch (tag) {
	case "r":
		tag = "red";
		break;
	case "g":
		tag = "green";
		break;
	case "b":
		tag = "blue";
		break;
	case "w":
		tag = "white";
		break;
	default:
		break;
	}
	return tag;
}

function setupCss() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode("p {font-size: " + pSize
			+ "px; color: " + pColor + ";}"));
	style.appendChild(document.createTextNode("h1 {font-size: " + h1Size
			+ "px; color: " + h1Color + ";}"));
	style.appendChild(document.createTextNode("h2 {font-size: " + (h1Size - 10)
			+ "px;}"));
	style.appendChild(document.createTextNode("h3 {font-size: " + (h1Size - 20)
			+ "px;}"));
	style.appendChild(document.createTextNode("body {font-size: " + bodySize
			+ "px; color: " + bodyColor + "; background-color: " + bgColor
			+ ";}"));

	document.head.appendChild(style);
}