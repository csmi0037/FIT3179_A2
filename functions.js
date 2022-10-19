var vg_1 = "data/multiple.vg.json";
vegaEmbed("#multiple", vg_1, {"actions": false}).then(function(result) {}).catch(console.error);

var vg_2 = "data/categories.vg.json";
vegaEmbed("#bar_chart", vg_2, {"actions": false}).then(function(result) {}).catch(console.error);

var vg_3 = "data/chart.vg.json";
vegaEmbed("#a_chart", vg_3, {"actions": false}).then(function(result) {}).catch(console.error);

