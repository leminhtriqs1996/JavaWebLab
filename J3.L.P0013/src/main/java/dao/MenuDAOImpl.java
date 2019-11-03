/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import model.Menu;
import model.Sushi;


public class MenuDAOImpl implements MenuDAO {

    @Override
    public ArrayList<Menu> getList() {
        ArrayList<Menu> ls = new ArrayList<Menu>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from menu");
            ResultSet rs = ps.executeQuery();
            
            while (rs.next()) {
                int menu_id = rs.getInt("id");
                String menu_name = rs.getString("name");
                double price = 0 ;
                ArrayList<Sushi> listSushi = new ArrayList<Sushi>();
                
                Statement stmt = con.createStatement();
               
                ResultSet rs1 = stmt.executeQuery("select product_id,dbo.product.name,dbo.product.price from menu_product inner join dbo.product on dbo.menu_product.product_id = dbo.product.id where menu_id =" + menu_id);
                
                
                while (rs1.next()){
                    price += rs1.getDouble("price") ;
                   listSushi.add(new Sushi(rs1.getInt(1) , rs1.getString(2) , rs1.getDouble(3)));
                }
                
                ls.add(new Menu(menu_id,menu_name,listSushi,price));
            
            }
        } catch (Exception ex) {
            
        }
        return ls;
    }
    
    

    @Override
    public ArrayList<Menu> getList1() {
        ArrayList<Menu> ls = new ArrayList<Menu>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from menu");
            ResultSet rs = ps.executeQuery();
            
            while (rs.next()) {
                int menu_id = rs.getInt("id");
                String menu_name = rs.getString("name");
                
//                double price = 0 ;
//                ArrayList<Sushi> listSushi = new ArrayList<Sushi>();
//                
//                
//                PreparedStatement ps1 = (PreparedStatement) con
//                    .prepareStatement("select * from menu_product inner join dbo.product on dbo.menu_product.product_id = dbo.product.id where menu_id = ?");
//                ps1.setInt(1, menu_id);
//                ResultSet rs1 = ps.executeQuery();
//                
//                while (rs1.next()){
//                    price += rs1.getDouble("price") ;
//                   listSushi.add(new Sushi(rs1.getInt("product_id") , rs1.getString("name") , rs1.getDouble("price")));
//                }
                
                ls.add(new Menu(menu_id,menu_name));
            
            }
        } catch (Exception ex) {
            
        }
        return ls;
    }
    
}
