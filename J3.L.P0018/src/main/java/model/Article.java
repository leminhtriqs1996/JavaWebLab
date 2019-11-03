/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.Date;

/**
 *
 * @author tri
 */
public class Article {
    private int id;
    private String title;
    private String content;
    private String image;
    private Date published_date;

    public Article() {
    }

    public Article(String title, String content, String image, Date published_date) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.published_date = published_date;
    }

    public Article(int id, String title, String content, String image, Date published_date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.published_date = published_date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getPublished_date() {
        return published_date;
    }

    public void setPublished_date(Date published_date) {
        this.published_date = published_date;
    }

    @Override
    public String toString() {
        return "Article{" + "id=" + id + ", title=" + title + ", content=" + content + ", image=" + image + ", published_date=" + published_date + '}';
    }

    
    
    
}
