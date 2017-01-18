package servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Example extends HttpServlet {
	private static final long serialVersionUID = 1L;

	String welcomeMessage = "Hello!!!";

	@Override
	public void init() throws ServletException {
		super.init();
		System.out.println(this.welcomeMessage);
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().println("<h1>Pagina di benvenuto per i contatti</h1>");
		response.getWriter()
				.println("<p style = \"text-align:center\"><strong>" + this.welcomeMessage + "</strong></p>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
