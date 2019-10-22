/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.ArrayList;
import java.util.List;
import model.Article;

/**
 *
 * @author tri
 */
interface ArticleDAO {
    public Article getArticle(int id);
    public ArrayList<Article> getListArticleSortByDate();
    public ArrayList<Article> getListArticle();
}
