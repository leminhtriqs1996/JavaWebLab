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
            Class.forName("net.sourceforge.jtds.jdbc.Driver");
            dbConnection = DriverManager.getConnection("jdbc:jtds:sqlserver://DESKTOP-KUPK67O:1433/J3.L.P0017", "sa", "root");
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
