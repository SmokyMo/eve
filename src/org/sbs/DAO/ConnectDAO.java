package org.sbs.DAO;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectDAO {

    public static Connection conn() {

        String user = "db2admin";
        String password = "db2admin";
        String url = "jdbc:db2://localhost:50000/ASOD";

        Connection c = null;
        try {
            Class.forName("com.ibm.db2.jcc.DB2Driver").newInstance();
            c = DriverManager.getConnection(url, user, password);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return c;
    }
}
