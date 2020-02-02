// from data.js
var tableData = data;


// d3 to select body
var tbody = d3.select("tbody")

tableData.forEach(function(dataLoop){
    // row
    var row = tbody.append("tr");
    // data in row
    Object.entries(dataLoop).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td").text(value);
    });
});


//d3 to select button
var btn = d3.select("#filter-btn")

btn.on("click", function(){
    // datetime variables
    var dt = d3.select('#datetime');
    var sel_dt = dt.property("value");

    // clear table
    tbody.html("")

    // variable to show filtered data only
    var filteredData = tableData.filter(dataLoop => dataLoop.datetime === sel_dt);

    filteredData.forEach(function(dataLoop){
        // row
        var row = tbody.append("tr");
        // data in row
        Object.entries(dataLoop).forEach(function([key,value]){
            console.log(key,value);
            var cell = row.append("td").text(value);
        });
    });
})
