gdps = {
    "#albania": 12269,
    "#austria": 387299,
    "#belarus": 45887,
    "#belgium": 465248,
    "#bosnia-and-herzegovina": 16324,
    "#bulgaria": 49364,
    "#croatia": 49928,
    "#cyprus": 0,
    "#czech-republic": 185269,
    "#denmark": 301784,
    "#estonia": 23476,
    "#finland": 234578,
    "#france": 2488284,
    "#germany": 3494898,
    "#greece": 194594,
    "#hungary": 117729,
    "#iceland": 18633,
    "#ireland": 254596,
    "#italy": 1852499,
    "#latvia": 28177,
    "#lithuania": 43024,
    "#luxembourg": 60176,
    "#macedonia": 10424,
    "#malta": 10341,
    "#moldova": 6084,
    "#montenegro": 4182,
    "#netherlands": 769930,
    "#norway": 366873,
    "#poland": 473501,
    "#portugal": 205085,
    "#romania": 181944,
    "#russian-federation": 1267754,
    "#san-marino": 1569,
    "#serbia": 37381,
    "#slovakia": 89797,
    "#slovenia": 43791,
    "#spain": 1252163,
    "#sweden": 512748,
    "#switzerland": 651770,
    "#ukraine": 83550,
    "#united-kingdom": 2649893
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
