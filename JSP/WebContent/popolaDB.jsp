<%@page import="model.Contatto"%>
<%@page import="model.DBManager"%>
<%@page import="model.Telefono"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="scripts/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="scripts/javascript.js"></script>

</head>
<body>
	<a href="index.html">Torna alla home</a>

	<h1>Inserimento contatto</h1>
	<table>
		<thead>
			<tr>
				<th>Nome</th>
				<th>Cognome</th>
				<th>Telefono</th>
				<th>Email</th>
			</tr>
		</thead>
		<tbody id="tbodyContatto">
			<tr id="lastRowContatto">
				<td><input id="nomeContatto" name="nomeContatto" type="text"
					placeholder="Nome" /></td>
				<td><input id="cognomeContatto" name="cognomeContatto"
					type="text" placeholder="Cognome" /></td>
				<td><input id="telefonoContatto" name="telefonoContatto"
					type="text" placeholder="Telefono" /></td>
				<td><input id="emailContatto" name="emailContatto" type="text"
					placeholder="Email" /></td>
				<td><button id="addContatto">Aggiungi Contatto</button>
			</tr>
		</tbody>
	</table>

	<h1>Inserimento messaggio</h1>
	<table>
		<thead>
			<tr>
				<th>Testo</th>
				<th>Telefono</th>
				<th>Contatto</th>
			</tr>
		</thead>
		<tbody id="tbodyMessaggio">
			<tr id="lastRowMessaggio">
				<td><input id="testoMessaggio" name="testoMessaggio"
					type="text" placeholder="Testo"></td>
				<td><select id="telefonoMessagio" name="telefonoMessagigo"
					placeholder="Telefono">
						<%
							for (Telefono t : DBManager.getInstance().telefoni) {
								out.println("<option value=\"" + t.getCodiceImei() + "\">" + t.getCodiceImei() + "</option>");
							}
						%>
				</select></td>
				<td><select id="contattoMessaggio" name="contattoMessaggio"
					placeholder="Contatto">
						<%
							for (Contatto c : DBManager.getInstance().contatti) {
								out.println("<option value=\"" + c.getNome() + "_" + c.getCognome() + "\">" + c.getNome()
										+" "+ c.getCognome() + "</option>");
							}
						%>
				</select></td>
				<td>
					<button id="addMessaggio">Aggiungi Messaggio</button>
				</td>
			</tr>
		</tbody>
	</table>

	<h1>Inserimento telefono</h1>
	<table>
		<tbody id="tbodyTelefono">
			<tr id="lastRowTelefono">
				<td><input id="codiceImeiTelefono" name="codiceImeiTelefono"
					type="text" placeholder="Codice Imei" /></td>
				<td><input id="modelloTelefono" name="modelloTelefono"
					type="text" placeholder="Modello" /></td>
				<td><input id="sistemaOperativoTelefono"
					name="sistemaOperativoTelefono" type="text"
					placeholder="Sistema Operativo" /></td>
				<td><button id="addTelefono">Aggiungi Telefono</button></td>
			</tr>

		</tbody>
	</table>

</body>
</html>