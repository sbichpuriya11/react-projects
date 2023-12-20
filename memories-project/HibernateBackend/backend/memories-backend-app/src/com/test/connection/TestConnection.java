package com.test.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class TestConnection {
	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/memories?useSSL=false&amp;serverTimezone=UTC";
		String username = "hbstudent";
		String password = "hbstudent";
		try {
			Connection connection = DriverManager.getConnection(url,username,password);
			connection.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("Everything ran good...");
	}
}
