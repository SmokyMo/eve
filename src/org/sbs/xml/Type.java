//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.05.23 at 12:21:02 PM UZT 
//


package org.sbs.xml;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Type complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Type">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="buy" type="{}Buy"/>
 *         &lt;element name="sell" type="{}Sell"/>
 *       &lt;/sequence>
 *       &lt;attribute name="id" type="{http://www.w3.org/2001/XMLSchema}int" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Type", propOrder = {
    "buy",
    "sell"
})
public class Type {

    @XmlElement(required = true)
    protected Buy buy;
    @XmlElement(required = true)
    protected Sell sell;
    @XmlAttribute(name = "id")
    protected Integer id;

    /**
     * Gets the value of the buy property.
     * 
     * @return
     *     possible object is
     *     {@link org.sbs.xml.Buy }
     *     
     */
    public Buy getBuy() {
        return buy;
    }

    /**
     * Sets the value of the buy property.
     * 
     * @param value
     *     allowed object is
     *     {@link org.sbs.xml.Buy }
     *     
     */
    public void setBuy(Buy value) {
        this.buy = value;
    }

    /**
     * Gets the value of the sell property.
     * 
     * @return
     *     possible object is
     *     {@link org.sbs.xml.Sell }
     *     
     */
    public Sell getSell() {
        return sell;
    }

    /**
     * Sets the value of the sell property.
     * 
     * @param value
     *     allowed object is
     *     {@link org.sbs.xml.Sell }
     *     
     */
    public void setSell(Sell value) {
        this.sell = value;
    }

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setId(Integer value) {
        this.id = value;
    }

}
