/**
 *  Created by Артем Биличенко
 *  on 21.Май.2014 11:29
 */

function getRffURL() {
    var StartSystemName = $('#ss').val();
    var EndSystemName = $('#dest').val();
    var url;
    if ((StartSystemName != "" && StartSystemName != null) && (EndSystemName != "" && EndSystemName != null)) {
        url = 'http://api.red-frog.org/jumps.json.php/' + StartSystemName + ',' + EndSystemName;
    } else {
        alert("Заполните оба поля");
    }
    getRffXMLDocument(url);
}

function getRffXMLDocument(url) {
    var xml;
    if (window.XMLHttpRequest) {
        xml = new window.XMLHttpRequest();
        xml.open("GET", url, false);
        xml.send("");
        parseRffXML(xml.response);
    } else if (window.ActiveXObject) {
        xml = new ActiveXObject("Microsoft.XMLDOM");
        xml.async = false;
        xml.load(url);
        parseRffXML(xml.response);
    } else {
        alert("Загрузка XML не поддерживается браузером");
    }
}

function parseRffXML(jsonObject) {
    var data = JSON.parse(jsonObject);
    $('#j').html(parseInt(data[0].jumps).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
    $('#rew').html(parseInt(data[0].reward).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
}


