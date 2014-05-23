/**
 *  Created by Артем Биличенко
 *  on 18.Март.2014 12:46
 */

function astero () {
    var trit1 = $('#trit').val();
    var pyer1 = $('#pyer').val();
    var mex1 = $('#mex').val();
    var iso1 = $('#iso').val();
    var noc1 = $('#noc').val();
    var zyd1 = $('#zyd').val();
    var meg1 = $('#meg').val();

    var s = parseInt (trit1*23782 + pyer1*7964 + mex1*2794 + iso1*462 + noc1*40 + zyd1*9 + meg1*2);
    itemDB(s);

    alert(s);

}

function itemDB(s) {
    var sisCore = {itemID: "28758", otherID: "17938", lpCost: "14400", iskCost: "9600000"};
    var sisExp = {itemID: "28756", otherID: "18639", lpCost: "14400", iskCost: "9600000"};
    var sisAstero = {itemID: "33468",lpCost: "30000",iskCost: "15000000",otherCost: "700000" };
    var sisStratios = {itemID: "33470",lpCost: "120000",iskCost: "30000000",otherCost: "11000000" };
    return {
        "28758": sisCore,
        "28756": sisExp,
        "33468": sisAstero,
        "33470": sisStratios
    };
}

function mineralDB() {
    var Tritanium = {itemID: "34"};
    var Pyerite = {itemID: "35"};
    var Mexallon = {itemID: "36"};
    var Isogen = {itemID: "37"};
    var Nocxium = {itemID: "38"};
    var Zydrine = {itemID: "39"};
    var Megacyte = {itemID: "40"};
    var Morphite = {itemID: "11399"};
    return {
        "34": Tritanium,
        "35": Pyerite,
        "36": Mexallon,
        "37": Isogen,
        "38": Nocxium,
        "39": Zydrine,
        "40": Megacyte,
        "11399": Morphite
    };
}