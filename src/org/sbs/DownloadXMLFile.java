package org.sbs;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;

/**
 * Created by Артем Биличенко
 * on 23.Май.2014 13:59
 */
//сохранение XML
public class DownloadXMLFile {
    public DownloadXMLFile (){}

    public void getContent(){
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        try {
            URL url = new URL("http://api.eve-central.com/api/marketstat?typeid=34&usesystem=30000142");
            bis = new BufferedInputStream(url.openConnection(new Proxy(Proxy.Type.HTTP,new InetSocketAddress("192.168.0.2",8080))).getInputStream());
            bos = new BufferedOutputStream(new FileOutputStream(new File("/Programing/Projects/eve/Users/marketstat.xml")));
            int c;
            while ((c = bis.read()) != -1) {
                bos.write(c);
            }
            System.out.println("Данные успешно сохранены");
        } catch (Exception e) {
            System.err.println("Ошибка при получении данных" + e.getMessage());
        } finally {
            try {
                bis.close();
            }  catch (IOException e){
               System.err.println("Ошибка закрытия BufferedInputStream" + e.getMessage());
            }
            try {
                bos.close();
            }catch (IOException e) {
               System.err.println("Ошибка закрытия BufferedOutputStream" + e.getMessage());
            }
        }
    }
}
