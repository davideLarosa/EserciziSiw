package servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

import com.fasterxml.jackson.databind.ObjectMapper;

import manager.Contatto;

public class ContactManagerAjax extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	public void init() throws ServletException {
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("servlet get attiva");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		HttpSession session = request.getSession();
		if (session.getAttribute("contatti") == null) {
			session.setAttribute("contatti", new ArrayList<Contatto>());
		}

		ArrayList<Contatto> contatti = (ArrayList<Contatto>) session.getAttribute("contatti");

		String jsonString = request.getParameter("contatto");
		System.out.println("richiesta " + jsonString);

		ObjectMapper mapper = new ObjectMapper();
		Contatto c = mapper.readValue(jsonString, Contatto.class);
		contatti.add(c);

		try {
			JSONObject obj = new JSONObject(jsonString);
			String name = obj.getString("name");
			String surname = obj.getString("surname");
			String phone = obj.getString("phone");
			String email = obj.getString("email");
			System.out.println("from json " + name + " " + surname + " " + phone + " " + email);

		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		response.getWriter().println("<td>" + c.getName() + "</td>");
		response.getWriter().println("<td>" + c.getSurname() + "</td>");
		response.getWriter().println("<td>" + c.getPhone() + "</td>");
		response.getWriter().println("<td>" + c.getEmail() + "</td>");

		response.setStatus(HttpServletResponse.SC_OK);

	}

}
