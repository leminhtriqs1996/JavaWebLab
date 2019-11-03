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


public class ArticleDAOImpl implements ArticleDAO {

    @Override
    public ArrayList<Article> getListArticleSortByDate() {
        ArrayList<Article> ls = new ArrayList<Article>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from article ORDER BY date DESC");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ls.add(new Article( rs.getInt("id"), rs.getString("name"), rs.getString("description"), rs.getString("image"),rs.getDate("date") ) );
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ls;
    }

    @Override
    public ArrayList<Article> getListArticle() {
        ArrayList<Article> ls = new ArrayList<Article>() ;
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from article");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ls.add(new Article( rs.getInt("id"), rs.getString("name"), rs.getString("description"), rs.getString("image"), rs.getDate("date") ) );
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ls;
    }

    @Override
    public Article getArticle(int id) {
        Article a = new Article();
        try(Connection con = DBConnect.getDBConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("select * from article where id=?");
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                a.setId(id);
                a.setTitle(rs.getString("name"));
                a.setContent(rs.getString("description"));
                a.setImage(rs.getString("image"));
                a.setPublished_date(rs.getDate("date"));
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(ArticleDAOImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return a;
    }
    
    public static void main(String[] args) {
        ArticleDAOImpl a = new ArticleDAOImpl();
        System.out.println(a.getListArticleSortByDate());
        System.out.println(a.getListArticle());
        System.out.println(a.getArticle(1));
    }
    
}
