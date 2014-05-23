<%--<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="utf-8" session="false" %>--%>
<%@ page import="org.sbs.DAO.QueryDAO" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title></title>
    <META http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <META http-equiv="Pragma" content="no-cache"/>
    <META http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0"/>

    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/scripts/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/jqwidgets/jqxscrollbar.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/jqwidgets/jqxlistbox.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/jqwidgets/jqxdropdownlist.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/jqxScripts/jqwidgets/jqxinput.js"></script>

    <script type="text/javascript" charset="UTF-8" src="js/myScripts/main.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/myScripts/itemDB.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/myScripts/XMLscripts.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/myScripts/CalculatingScript.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/myScripts/MineralPrice.js"></script>
    <script type="text/javascript" charset="UTF-8" src="js/myScripts/RffXMLParse.js"></script>

    <link rel="stylesheet" charset="utf-8" href="css/jqxStyles/styles/jqx.base.css"/>
    <link rel="stylesheet" charset="utf-8" href="css/jqxStyles/styles/jqx.fresh.css"/>
    <link rel="stylesheet" href="css/myStyles/style.css"/>
</head>

<%
    response.setContentType("text/html;charset=UTF-8");
    request.setCharacterEncoding("UTF-8");
    if (request.getParameter("save")!=null){
    org.sbs.Bean.MainBean mainBean = new org.sbs.Bean.MainBean();
    mainBean.setLpCost(request.getParameter("lpC"));
    mainBean.setIskCost(request.getParameter("iskC"));
    mainBean.setSellPrice(request.getParameter("sellP"));
    QueryDAO.main(mainBean);
    }
%>

<body onload="getMineralURL();">
<div id="header">
    <table class="mineralTable">
        <tr>
            <td>Tritanium</td>
            <td>Pyerite</td>
            <td>Mexallon</td>
            <td>Isogen</td>
            <td>Nocxium</td>
            <td>Zydrine</td>
            <td>Megacyte</td>
            <td>Morphite</td>
        </tr>
        <tr>
            <div class="minFieldDiv">
            <td class="minField"><input type="text" id="trit" class="minField"/></td>
            <td class="minField"><input type="text" id="pyer" class="minField"/></td>
            <td class="minField"><input type="text" id="mex" class="minField"/></td>
            <td class="minField"><input type="text" id="iso" class="minField"/></td>
            <td class="minField"><input type="text" id="noc" class="minField"/></td>
            <td class="minField"><input type="text" id="zyd" class="minField"/></td>
            <td class="minField"><input type="text" id="meg" class="minField"/></td>
            <td class="minField"><input type="text" id="mor" class="minField"/></td>
            </div>
        </tr>

    </table>
</div>
<div id="left"></div>
<div id="right"></div>
<div id="middle">
    <form action="index.jsp" method="POST">
    <table class="entrance_data">
        <tr>
            <td class="name" colspan="2">
                <div id='hub'></div>
            </td>
        </tr>
        <tr>
            <td class="name" colspan="2">
                <div id='item'></div>
            </td>
        </tr>
        <tr>
            <td class="name">Yours LP</td>
            <td><input type="text" id="yLp"></td>
        </tr>
        <tr>
            <td class="name">LP Cost</td>
            <td><input type="text" id="lpC" name="lpC"></td>
        </tr>
        <tr>
            <td class="name">ISK Cost</td>
            <td><input type="text" id="iskC" name="iskC"></td>
        </tr>
        <tr>
            <td class="name">Other Cost</td>
            <td><input type="text" id="otherC"></td>
        </tr>
        <tr>
            <td class="name">Sell Price</td>
            <td><input type="text" id="sellP" name="sellP"></td>
        </tr>
        <tr>
            <td class="name">Buy</td>
            <td><input type="text" id="buyP"></td>
        </tr>
        <tr>
            <td class="name">Quantity</td>
            <td><input type="text" id="quantity"></td>
        </tr>
        <tr>
            <td class="name">ISK/LP</td>
            <td id="iskLp"><b></b></td>
        </tr>
        <tr>
            <td class="name">Profit</td>
            <td id="profit"><b></b></td>
        </tr>
        <tr>
            <td colspan="2"><input type="button" id="calc" value="Calculate" onclick="Calc();Read"></td>
            <td colspan="2"><input type="submit" id="save" value="Save" name="save"></td>
        </tr>
    </table>
    </form>
    <table class="redFrogFreight">
        <tr>
            <td colspan="2">Trip Calculator by Red Frog Freight</td>
        </tr>
        <tr>
            <td>Start System</td>
            <td><input type="text" id="ss"></td>
        </tr>
        <tr>
            <td>Destination</td>
            <td><input type="text" id="dest"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="button" id="trip" value="Plan route and calculate reward" onclick="getRffURL();"></td>
        </tr>
        <tr>
            <td>Total jumps: </td>
            <td id="j"></td>
        </tr>
        <tr>
            <td>Reward: </td>
            <td id="rew"></td>
        </tr>
    </table>
</div>
<div id="footer"></div>
</body>
</html>
