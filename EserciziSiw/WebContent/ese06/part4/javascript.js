var form = document.getElementById("options").onsubmit = function changeData(e) {
	var p_size = document.getElementById("p_size").value;
	var p_color = document.getElementById("p_color").value;
	var b_size = document.getElementById("body_size").value;
	var b_color = document.getElementById("body_color").value;
	var h1_size = document.getElementById("h1_size").value;
	var h1_color = document.getElementById("h1_color").value;
	var body_bg = document.getElementById("body_bg").value;

	setup(p_size, p_color, 0);
	setup(b_size, b_color, 1);
	setup(h1_size, h1_color, 2);
	setup_body(body_bg);
	e.preventDefault();
}

function setup(size, color, index) {
	document.styleSheets[0].cssRules[index].style.fontSize = size + "px";
	document.styleSheets[0].cssRules[index].style.color = color;
	document.styleSheets[0].cssRules[index].style.textAlign = "left";
}

function setup_body(body_bg) {
	document.styleSheets[0].cssRules[1].style.backgroundColor  = body_bg;
}