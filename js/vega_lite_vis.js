var vg_1 = "js/suicide_rate_map.vg.json";
vegaEmbed("#map_chart", vg_1, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/suicide_rate_line.vg.json";
vegaEmbed("#line_chart", vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/suicide_change_time.vg.json";
vegaEmbed("#map_chart_time", vg_3, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "js/GdpVsDeathRate_scatter.vg.json";
vegaEmbed("#scatter_chart", vg_4, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
