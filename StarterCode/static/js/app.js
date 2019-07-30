// Brandon Coleman
// Data Analytics Bootcamp
// Javascript DOM Manipulation Homework
// 7 - 27 - 2019

// from data.js;
var tableData = data;
// YOUR CODE HERE!

// Build Rows and Columns from tableData
plotdata(tableData);

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    var tbody = d3.select("tbody");
    tbody.selectAll("td").html("");
    tbody.selectAll("tr").html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var cityElement = d3.select("#cityplace");
    var stateElement = d3.select("#stateplace");
    var countryElement = d3.select("#countryplace");
    var shapeElement = d3.select("#ufoshape");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");


    // Copy tabledata to filter - default (not filtered)
    var filteredData = tableData;

    // Filter by date city state country and shape inputs
    if (inputValue != '') {
        filteredData = tableData.filter(tableData => tableData.datetime == inputValue)
    };

    if (cityValue != '') {
        filteredData = filteredData.filter(filteredData => filteredData.city == cityValue)
    };

    if (stateValue != '') {
        filteredData = filteredData.filter(filteredData => filteredData.state == stateValue)
    };

    if (countryValue != '') {
        filteredData = filteredData.filter(filteredData => filteredData.country == countryValue)
    };

    if (shapeValue != '') {
        filteredData = filteredData.filter(filteredData => filteredData.shape == shapeValue)
    };

    // leaving search fields empty resets the table to its original state

    plotdata(filteredData);

});

// plot data by appending rows and cells to tbody tag

function plotdata(arr) {

    arr.forEach((obj) => {
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });

}