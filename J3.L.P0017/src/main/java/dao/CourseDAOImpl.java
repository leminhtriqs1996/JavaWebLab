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
import model.Article;
import model.Course;

/**
 *
 * @author aaa
 */
public class CourseDAOImpl implements CourseDAO{

    @Override
    public ArrayList<Course> getListCourse() {
        ArrayList<Course> ls = new ArrayList<Course>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from course");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ls.add(new Course( rs.getInt("id"), rs.getString("name"), rs.getString("description"),rs.getFloat("price"),rs.getDate("date") ) );
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ls;
    }
    
}
