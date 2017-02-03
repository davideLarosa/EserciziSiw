package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.DBManager;

public class ContattoEsempio extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setAttribute("nome", request.getParameter("nome"));
		request.setAttribute("cognome", request.getParameter("cognome"));
		request.setAttribute("telefono", request.getParameter("telefono"));
		request.setAttribute("email", request.getParameter("email"));

		request.setAttribute("contatti", DBManager.getInstance().contatti);
		System.out.println("sono presenti " + DBManager.getInstance().contatti.size() + " contatti");
		RequestDispatcher dispatcher = request.getRequestDispatcher("contattoEsempio.jsp");
		
		dispatcher.forward(request, response);

	}
}
