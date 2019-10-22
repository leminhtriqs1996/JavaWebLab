/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author tri
 */
public class Couter {
    private int count=0;

    public Couter() {
    }

    
    
    public Couter(int count) {
        this.count = count;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Couter{" + "count=" + count + '}';
    }
    
    
}
