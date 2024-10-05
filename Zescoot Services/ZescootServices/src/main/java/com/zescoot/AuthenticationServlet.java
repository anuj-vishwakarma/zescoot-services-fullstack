package com.zescoot;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthenticationServlet extends HttpServlet{
	
	// Handles login, so we need to use do post for security purposes (:
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		/*
		 * RequestDispatcher dispatcher = request.getRequestDispatcher("/login.html");
		 * dispatcher.forward(request, response);
		 */
		
		response.sendRedirect("login.html");
	}

}
