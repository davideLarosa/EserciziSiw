package servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import manager.Contatto;

public class ContactManagerWithSession extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config) throws ServletException {

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();

		if (session.getAttribute("contatti") == null) {
			session.setAttribute("contatti", new ArrayList<Contatto>());
		}

		ArrayList<Contatto> contatti = (ArrayList<Contatto>) session.getAttribute("contatti");

		response.getWriter().println("<table border = \"1\" style=\"text-align:center\"");
		response.getWriter().println("<th>");
		response.getWriter().println("<td>");
		response.getWriter().println("Name");
		response.getWriter().println("</td>");
		response.getWriter().println("<td>");
		response.getWriter().println("Surname");
		response.getWriter().println("</td>");
		response.getWriter().println("<td>");
		response.getWriter().println("Phone");
		response.getWriter().println("</td>");
		response.getWriter().println("<td>");
		response.getWriter().println("Email");
		response.getWriter().println("</td>");
		response.getWriter().println("</th>");

		for (Contatto c : contatti) {
			response.getWriter().println("<tr>");

			response.getWriter().println("<td>");
			response.getWriter().println(c.getName());
			response.getWriter().println("</td>");

			response.getWriter().println("<td>");
			response.getWriter().println(c.getSurname());
			response.getWriter().println("</td>");

			response.getWriter().println("<td>");
			response.getWriter().println(c.getPhone());
			response.getWriter().println("</td>");

			response.getWriter().println("<td>");
			response.getWriter().println(c.getEmail());
			response.getWriter().println("</td>");

			response.getWriter().println("</tr>");
		}

		response.getWriter().println("</table>");

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();

		if (session.getAttribute("contatti") == null) {
			session.setAttribute("contatti", new ArrayList<Contatto>());
		}

		ArrayList<Contatto> contatti = ((ArrayList<Contatto>) (session.getAttribute("contatti")));

		String name = request.getParameter("name");
		String surname = request.getParameter("surname");
		String phone = request.getParameter("phone");
		String email = request.getParameter("email");

		contatti.add(new Contatto(name, surname, phone, email));

		response.getWriter().println("<p style=\"text-align:center\"> Contatto aggiunto con successo!</p>");
		response.setStatus(HttpServletResponse.SC_OK);
	}

}
