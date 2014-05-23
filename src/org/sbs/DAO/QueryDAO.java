package org.sbs.DAO;

import org.sbs.Bean.MainBean;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Created by Артем Биличенко
 * on 22.Май.2014 10:56
 */

public class QueryDAO {
    static Connection currentCon = null;
    static ResultSet rs = null;

    public static void main(MainBean bean){
        Statement stmt = null;
        String lpCost = bean.getLpCost();
        String iskCost = bean.getIskCost();
        String sellPrice = bean.getSellPrice();
        System.out.println(lpCost);
        System.out.println(iskCost);
        System.out.println(sellPrice);
        String query = "INSERT INTO MYDB.PRICE_LIST (LPCOST,ISKCOST,SELLPRICE) VALUES ('"+lpCost+"','"+iskCost+"','"+sellPrice+"')";
        try{
            currentCon = ConnectDAO.conn();
            stmt = currentCon.createStatement();
            stmt.executeUpdate(query);
            currentCon.commit();
        } catch (Exception e){
            System.out.println(e);
            try {
                currentCon.rollback();
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
        } finally {
            try {
                if (currentCon != null)
                    currentCon.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
