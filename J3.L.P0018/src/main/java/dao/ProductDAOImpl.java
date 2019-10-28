/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import model.Product;


public class ProductDAOImpl implements ProductDAO {

    @Override
    public ArrayList<Product> getList() {
        ArrayList<Product> ls = new ArrayList<Product>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from product");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ls.add(new Product( rs.getInt("id"), rs.getString("name"), rs.getString("description") , rs.getString("image") ) );
            }
        } catch (Exception ex) {
            
        }
        return ls;
    }
    
}
