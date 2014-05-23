package org.sbs.Bean;

/**
 * Created by Артем Биличенко
 * on 22.Май.2014 10:41
 */

public class MainBean {
    private String lpCost;
    private String iskCost;
    private String sellPrice;

    public String getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(String sellPrice) {
        this.sellPrice = sellPrice;
    }

    public String getIskCost() {
        return iskCost;
    }

    public void setIskCost(String iskCost) {
        this.iskCost = iskCost;
    }

    public String getLpCost() {
        return lpCost;
    }

    public void setLpCost(String lpCost) {
        this.lpCost = lpCost;
    }

}
