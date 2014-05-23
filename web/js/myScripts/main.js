/**
 *  Created by Артем Биличенко
 *  on 28.Февраль.2014 11:32
 */


$(document).ready(function () {


    $("input[type=button]").jqxButton({ width: '80', height: '30', theme: 'fresh'});
    $("#trip").jqxButton({width: '225', height: '30', theme: 'fresh'});
    $("input[type=text]").jqxInput({height: 10, width: 172, minLength: 1});
    $("input[type=text].minField").jqxInput({height: 10, width: 100, minLength: 1});


    // Create a HubDropDownList
    var sourceHub = [
        { html: "<div class='item' value ='28758' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' /><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Select Hub</span></div>", value: 0, title: 'jqxNumberInput'},
        { html: "<div class='item' value ='28758' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' /><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Jita</span></div>", value: 30000142, title: 'jqxNumberInput'},
        { html: "<div class='item' value ='28756' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' /><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Amarr</span></div>", value: 30002187, title: 'jqxProgressBar'},
        { html: "<div class='item' value ='33468' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' /><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Rens</span></div>", value: 30002510, title: 'jqxProgressBar'}
    ];
    $("#hub").jqxDropDownList({ source: sourceHub,
                                selectedIndex: 0,
                                width: '250',
                                height: '27px',
                                theme: 'fresh',
                                disabled: false}).on('select', function () {
        $("#item").jqxDropDownList({ disabled: false });

        getIDs()
    });



    // Create a ItemDropDownList
    var source = [
        { html: "<div style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' /><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Select Item</span></div>", title: 'Select Item', group: ' '},
        { html: "<div class='item' value ='28758' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='/css/images/28758_64.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Sisters Core Probe Launcher</span></div>", value: 28758, title: 'jqxNumberInput', group: 'SoE' },
        { html: "<div class='item' value ='28756' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='/css/images/28758_64.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Sisters Expanded Probe Launcher</span></div>", value: 28756, title: 'jqxProgressBar', group: 'SoE' },
        { html: "<div class='item' value ='33468' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='/css/images/astero.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Astero</span></div>", value: 33468, title: 'jqxProgressBar', group: 'SoE' },
        { html: "<div class='item' value ='33468' style='height: 27px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='/css/images/astero.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>Stratios</span></div>", value: 33470, title: 'jqxProgressBar', group: 'SoE' }
    ];
    $("#item").jqxDropDownList({ source: source,
                                      selectedIndex: 0,
                                      width: '250',
                                      height: '27px',
                                      theme: 'fresh',
                                      disabled: true}).on('select', function () {
        getIDs();
    });

    function getIDs() {
        var item = $("#item").jqxDropDownList('getSelectedItem');
        var hub = $("#hub").jqxDropDownList('getSelectedItem');
        var hub1 = hub.value;
        var item1 = item.value;
        getURL(item1, hub1);
        getMineralURL(hub1);
        Calc();
    };

});






