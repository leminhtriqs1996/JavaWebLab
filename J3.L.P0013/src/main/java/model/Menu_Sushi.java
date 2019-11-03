/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author aaa
 */
public class Menu_Sushi {
    private int id;
    private int sushi_id;
    private int menu_id;

    public Menu_Sushi(int id, int sushi_id, int menu_id) {
        this.id = id;
        this.sushi_id = sushi_id;
        this.menu_id = menu_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSushi_id() {
        return sushi_id;
    }

    public void setSushi_id(int sushi_id) {
        this.sushi_id = sushi_id;
    }

    public int getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(int menu_id) {
        this.menu_id = menu_id;
    }

    @Override
    public String toString() {
        return "Menu_Sushi{" + "id=" + id + ", sushi_id=" + sushi_id + ", menu_id=" + menu_id + '}';
    }
    
    
}
