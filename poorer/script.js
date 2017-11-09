gdps = {
    "#albania":                4000,
    "#austria":                44600,
    "#belarus":                5500,
    "#belgium":                44300,
    "#bulgaria":               6300,
    "#bosnia-and-herzegovina": 3500,
    "#croatia":                13400,
    "#cyprus":                 20600,
    "#czech-republic":         19100,
    "#denmark":                56500,
    "#estonia":                14600,
    "#european-union":         32400,
    "#europe":                 33484,
    "#finland":                53616,
    "#france":                 494 89,
    "#germany":                46352,
    "#greece":                 348 32,
    "#hungary":                13231,
    "#iceland":                62490,
    "#ireland":                68574,
    "#italy":                  412 59,
    "#kosovo":                 181 3,
    "#latvia":                 15097,
    "#liechtenstein":          145734,
    "#lithuania":              13674,
    "#luxembourg":             118538,
    "#malta":                  21272,
    "#moldova":                1433,
    "#montenegro":             6658,
    "#netherlands":            54640,
    "#norway":                 103586,
    "#poland":                 12271,
    "#portugal":               23930,
    "#macedonia":              4669,
    "#romania":                9615,
    "#russian-federation":     16487,
    "#san-marino":             36768,
    "#serbia":                 7038,
    "#slovakia":               18440,
    "#slovenia":               28396,
    "#spain":                  41565,
    "#sweden":                 56703,
    "#switzerland":            64974,
    "#turkey":                 17700,
    "#ukraine":                4350,
    "#united-kingdom":         45731,
}


onHoverCountry = function(e) {
    unHoverCountry();
    var country = e.children('a').attr('href');
    var gdp = gdps[country];
    var more = []
    var less = []
    Object.keys(gdps).forEach(function(key) {
        if (key == country) {
            return;
        }
        else if (gdps[key] < gdp) {
            less.push(key);
        }
        else {
            more.push(key);
        }
    });
    var map = document.getElementById("main_map");
    countries = map.getElementsByTagName("li");
    for (var i = 0; i < countries.length; ++i) {
        var country = countries[i];
        var country_anchor = country.getElementsByTagName("a")[0];
        var country_tag = country_anchor.getAttribute("href");
        if (less.includes(country_tag)) {
            country.classList.add("active-region");
        }
    };

}

unHoverCountry = function(e) {
    var map = document.getElementById("main_map");
    countries = map.getElementsByTagName("li");
    for (var i = 0; i < countries.length; ++i) {
        var country = countries[i];
        var country_anchor = country.getElementsByTagName("a")[0];
        var country_tag = country_anchor.getAttribute("href");
        country.classList.remove("active-region");
    };
}
