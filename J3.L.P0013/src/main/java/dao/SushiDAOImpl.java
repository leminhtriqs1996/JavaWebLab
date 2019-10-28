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
import model.Sushi;


public class SushiDAOImpl implements SushiDAO {

    @Override
    public ArrayList<Sushi> getList() {
        ArrayList<Sushi> ls = new ArrayList<Sushi>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from product");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ls.add(new Sushi( rs.getInt("id"), rs.getString("name"), rs.getDouble("price") ) );
            }
        } catch (Exception ex) {
            
        }
        return ls;
    }
    
}
