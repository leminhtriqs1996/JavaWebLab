package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DBConnect {

    public static Connection getDBConnection() throws ClassNotFoundException {
        Connection dbConnection = null;
        try {
//            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//            dbConnection = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;databaseName=ONLINESHOP", "sa", "123");
            Class.forName("net.sourceforge.jtds.jdbc.Driver");
            dbConnection = DriverManager.getConnection("jdbc:jtds:sqlserver://TRI-PC:1433/J3.L.P0011", "sa", "root");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return dbConnection;
    }

    public static void main(String[] args) {
        try {
            if (getDBConnection() != null) {
                System.out.println("Connected!");
            } else {
                System.out.println("Failed");
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DBConnect.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
