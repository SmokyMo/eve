package org.sbs; /**
 * Created by Артем Биличенко
 * on 23.Май.2014 10:55
 */

import org.sbs.xml.EvecApi;
import org.sbs.xml.Type;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.File;


public class ReadXMLFile {
    public void readContent (){
        try {
            JAXBContext jaxbContext
                    = JAXBContext.newInstance("org.sbs.xml");
            Unmarshaller unmarshaller =
                    jaxbContext.createUnmarshaller();

            JAXBElement<EvecApi> evecApiElement
                    = (JAXBElement<EvecApi>) unmarshaller.unmarshal(
                    new File("/Programing/Projects/eve/Users/marketstat.xml"));
            System.out.println("Данные успешно считаны");
            System.out.println("-------------------------------------------");
            EvecApi evecApi = evecApiElement.getValue();
            for (Type type : evecApi.getMarketstat().getType()) {
                System.out.println("Type ID: " + type.getId());
                System.out.println("---------------- BUY ----------------");
                System.out.println("min: " + type.getBuy().getMin() + " / " + "max: " + type.getBuy().getMax());
                System.out.println("---------------- SELL ----------------");
                System.out.println("min: " + type.getSell().getMin() + " / " + "max: " + type.getSell().getMax());
            }
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }
    public static void main(String argv[]) {
        DownloadXMLFile downloadXMLFile = new DownloadXMLFile();
        downloadXMLFile.getContent();
        ReadXMLFile readXMLFile = new ReadXMLFile();
        readXMLFile.readContent();

    }
}
