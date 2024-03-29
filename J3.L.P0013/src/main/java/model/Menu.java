/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author tri
 */
public class Menu {
    private int id ;
    private String name;
    private ArrayList<Sushi> listSushi;
    private double price;

    public Menu(int id, String name, ArrayList<Sushi> listSushi, double price) {
        this.id = id;
        this.name = name;
        this.listSushi = listSushi;
        this.price = price;
    }

    public Menu(String name, ArrayList<Sushi> listSushi, double price) {
        this.name = name;
        this.listSushi = listSushi;
        this.price = price;
    }

    public Menu(int id, String name) {
        this.id = id;
        this.name = name;
    }

    
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Sushi> getListSushi() {
        return listSushi;
    }

    public void setListSushi(ArrayList<Sushi> listSushi) {
        this.listSushi = listSushi;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    
    
    
}
