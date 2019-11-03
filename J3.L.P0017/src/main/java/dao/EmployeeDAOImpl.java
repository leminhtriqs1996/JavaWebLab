/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Employee;
import model.Service;


public class EmployeeDAOImpl implements EmployeeDAO {

    @Override
    public ArrayList<Employee> getListEmployee() {
        ArrayList<Employee> ls = new ArrayList<Employee>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from employee");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ls.add(new Employee( rs.getInt("id"), rs.getString("name"), rs.getString("image"), rs.getString("role"),rs.getString("description") ) );
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ls;
    }
    
}
