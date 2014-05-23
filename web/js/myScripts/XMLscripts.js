/**
 *  Created by Артем Биличенко
 *  on 18.Март.2014 14:36
 */

function getURL(id,useSys) {
    var generalArr = itemDB();
    if (id == generalArr[id].itemID) {
        var f = generalArr[id];
        var itemID = f.itemID;
        var otherItemID = f.otherID;
        var iskPrice = f.iskCost;
        var lpPrice = f.lpCost;
        var otherCost = f.otherCost;
        $('#lpC').val(lpPrice);
        $('#iskC').val(iskPrice);
        if (otherItemID != "" && otherItemID != null) {
            var url = 'http://api.eve-central.com/api/marketstat?typeid=' + itemID + '&typeid=' + otherItemID + '&usesystem=' + useSys + '&minq=10';
        } else {
            url = 'http://api.eve-central.com/api/marketstat?typeid=' + itemID + '&usesystem=' + useSys;
        }
    }
    getXMLDocument(url, itemID, otherItemID, otherCost);
}

function getXMLDocument(url, itemID, otherItemID, otherCost) {
    var xml;
    if (window.XMLHttpRequest) {
        xml = new window.XMLHttpRequest();
        xml.open("GET", url, false);
        xml.send("");
        parseXML(xml.responseXML, itemID, otherItemID, otherCost);
    } else if (window.ActiveXObject) {
        xml = new ActiveXObject("Microsoft.XMLDOM");
        xml.async = false;
        xml.load(url);
        parseXML(xml.responseXML, itemID, otherItemID, otherCost);
    } else {
        alert("Загрузка XML не поддерживается браузером");
    }
}

function parseXML(xml, itemID, otherItemID, otherCost) {
    $(xml).find('type[id = "' + itemID + '"]').each(function () {
        $(this).find('buy').each(function () {
            var buyMax = $(this).find('max').text();
            $('#sellP').val(buyMax);
        });
        $(this).find("sell").each(function () {
            var sellMin = $(this).find('min').text();
            $('#buyP').val(sellMin);
        });
    });
    $(xml).find('type[id = "' + otherItemID + '"]').each(function () {
        $(this).find('sell').each(function () {
            var otherSellMin = $(this).find('min').text();
            $('#otherC').val(otherSellMin);
        });
    });
    $('#otherC').val(otherCost);
//    alert(otherCost);
}