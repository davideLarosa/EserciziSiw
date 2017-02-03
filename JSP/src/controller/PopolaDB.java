package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.Contatto;
import model.DBManager;
import model.Telefono;

public class PopolaDB extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (!request.getParameterNames().hasMoreElements()) {
			RequestDispatcher dispatcher = request.getRequestDispatcher("popolaDB.jsp");
			dispatcher.forward(request, response);
		} else {
			response.getWriter().println("Servlet chiamata in modo scorretto");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (request.getParameterNames().hasMoreElements()) {
			String jsonString = request.getParameter("nuovoContatto");
			if (jsonString != null) {
				System.out.println(jsonString);
				ObjectMapper mapper = new ObjectMapper();
				Contatto c = mapper.readValue(jsonString, Contatto.class);
				DBManager.getInstance().contatti.add(c);
				response.getWriter().println("<td>" + c.getNome() + "</td>");
				response.getWriter().println("<td>" + c.getCognome() + "</td>");
				response.getWriter().println("<td>" + c.getTelefono() + "</td>");
				response.getWriter().println("<td>" + c.getEmail() + "</td>");
				response.setStatus(HttpServletResponse.SC_OK);
			} else {
				System.out.println("richiesta vuota");
			}
			jsonString = request.getParameter("nuovoTelefono");
			if (jsonString != null) {
				System.out.println(jsonString);
				ObjectMapper mapper = new ObjectMapper();
				Telefono telefono = mapper.readValue(jsonString, Telefono.class);
				DBManager.getInstance().telefoni.add(telefono);

				response.getWriter().println("<td>" + telefono.getCodiceImei() + "</td>");
				response.getWriter().println("<td>" + telefono.getModello() + "</td>");
				response.getWriter().println("<td>" + telefono.getSistemaOperativo() + "</td>");
				response.setStatus(HttpServletResponse.SC_OK);
			}
		}
	}
}
