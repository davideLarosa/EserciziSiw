<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@page import="model.Contatto"%>

<jsp:useBean id="sampleContatto" class="model.Contatto" scope="request" />
<jsp:setProperty property="nome" name="sampleContatto" value="${nome}" />
<jsp:setProperty property="cognome" name="sampleContatto"
	value="${cognome}" />
<jsp:setProperty property="telefono" name="sampleContatto"
	value="${telefono}" />
<jsp:setProperty property="email" name="sampleContatto" value="${email}" />


<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
		Il contatto di esempio ha i seguenti dati <strong>Nome</strong> :
		<jsp:getProperty property="nome" name="sampleContatto" />
		<strong>Cognome</strong> :
		<jsp:getProperty property="cognome" name="sampleContatto" />
		<strong>Telefono</strong> :
		<jsp:getProperty property="telefono" name="sampleContatto" />
		<strong>Email</strong> :
		<jsp:getProperty property="email" name="sampleContatto" />
	</p>
	<h1>Tutti i contatti</h1>
	<ul>
		<c:forEach var="contatto" items="${contatti}">
			<li>${contatto.nome}${contatto.cognome}${contatto.telefono}
				${contatto.email}</li>
		</c:forEach>

	</ul>
</body>
</html>