/**
 *  Created by Артем Биличенко
 *  on 18.Март.2014 14:37
 */

function Calc() {
    var yoursLp = $('#yLp').val();
    var lpCost = $('#lpC').val();
    var iskCost = $('#iskC').val();
    var otherCost = $('#otherC').val();
    var sellPrice = $('#sellP').val();
    var quantity = $('#quantity').val();
    var iskLp = "";
    var profit = "";
    if (yoursLp == "" && quantity != "") {
        iskLp = (sellPrice - otherCost - iskCost) / lpCost;
        $('#iskLp').html(parseInt(iskLp).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
        profit = (sellPrice - otherCost - iskCost) * quantity;
        $('#profit').html(profit.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
    } else if (yoursLp != "" && quantity == "") {
        iskLp = (sellPrice - otherCost - iskCost) / lpCost;
        $('#iskLp').html(parseInt(iskLp).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
        var unknownQuantity = parseInt(yoursLp / lpCost);
        profit = (sellPrice - otherCost - iskCost) * unknownQuantity;
        $('#profit').html(profit.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
    } else {
//        alert('Fill the field "Yours LP" or "Quantity" and press "Calculate" button!');
    }
}