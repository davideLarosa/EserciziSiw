package servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import manager.Contatto;

public class ContactManager extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ArrayList<Contatto> contatti;

	public void init(ServletConfig config) throws ServletException {
		this.contatti = new ArrayList<Contatto>();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

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
		String name = request.getParameter("name");
		String surname = request.getParameter("surname");
		String phone = request.getParameter("phone");
		String email = request.getParameter("email");

		Contatto newContact = new Contatto(name, surname, phone, email);
		this.contatti.add(newContact);

		response.getWriter()
				.println("<p style=\"text-align: center\"> Hai aggiunto correttamente "
						+ contatti.get(contatti.size() - 1).getName() + " "
						+ contatti.get(contatti.size() - 1).getSurname() + "</p>");
		response.setStatus(HttpServletResponse.SC_OK);
	}

}
