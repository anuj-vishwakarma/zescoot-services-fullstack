package com.zescoot;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class RegisterUserServlet extends HttpServlet {

    // Handles registration
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String user = "root";
        String password = "Ian@31415926535";
        String url = "jdbc:mysql://localhost/zescoot";
        Connection connection = null;
        PreparedStatement ps = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // Updated driver class
            connection = DriverManager.getConnection(url, user, password);

            String name = request.getParameter("name");
            System.out.println(name);
            String phone = request.getParameter("phone");
            String email = request.getParameter("email");
            String pass = request.getParameter("password");

            String sql = "INSERT INTO credentials (name, phone, email, password) VALUES (?, ?, ?, ?)";
            ps = connection.prepareStatement(sql);
            ps.setString(1, name);
            ps.setString(2, phone);
            ps.setString(3, email);
            ps.setString(4, pass);

            int rowsAffected = ps.executeUpdate();
             
            PrintWriter out = response.getWriter();
            
            if (rowsAffected > 0) {
				/* out.println("Registration successful!"); */
            	HttpSession session = request.getSession();
                session.setAttribute("user", email);
                response.sendRedirect("register.html?register=success"); // Redirect to login page after successful registration
            } else {
            	response.sendRedirect("register.html?error=registration failed");
				/* out.println("Registration failed. Please try again."); */
            }
        } catch (Exception e) {
        	String error = (e.getMessage());
        	if(error.contains("Duplicate"));
        		response.sendRedirect("register.html?user=exists");
			/* response.getWriter().print("Error"); */
			/*
			 * response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
			 * "An error occurred.");
			 */
        } finally {
            try {
                if (ps != null) ps.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {

            	System.out.println(e.getMessage());
            }
        }
    }
}
