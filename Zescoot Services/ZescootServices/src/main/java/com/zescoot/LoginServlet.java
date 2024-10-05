package com.zescoot;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String user = "root";
        String password = "Ian@31415926535"; 
        String url = "jdbc:mysql://localhost/zescoot";
        Connection connection = null;
        PreparedStatement ps = null;
        
        try {
            // Disable caching for this request
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
            response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
            response.setDateHeader("Expires", 0); // Proxies.

            Class.forName("com.mysql.cj.jdbc.Driver"); // Updated driver class
            connection = DriverManager.getConnection(url, user, password);

            String email = request.getParameter("email");
            String pass = request.getParameter("password");

            String sql = "SELECT password FROM credentials WHERE email = ?";
            ps = connection.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                String passwordFromDB = rs.getString("password");
                
                if (pass.equals(passwordFromDB)) {
                    // Create a new session or get the existing session
                    HttpSession session = request.getSession();
                    session.setAttribute("user", email);
 
                    // Redirect to login.html with a query parameter indicating success
                    response.sendRedirect("login.html?login=success");
                } else {
                    response.sendRedirect("login.html?error=Invalid credentials");
                }
            } else {
                response.sendRedirect("login.html?error=Invalid credentials");
            }
            
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "An error occurred.");
        } finally {
            try {
                if (ps != null) ps.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
