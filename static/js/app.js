// from data.js
var tableData = data;

//getting table
var tbody = d3.select('tbody');

//function to build table
function tableBuilder(data) {
    //clear existing data
    tbody.html('');
    //loop through data
    data.forEach((dataRow) => {
        //append a row to the table
        var row = tbody.append('tr');
        //loop through each field in row and add each value as td (cell)
        Object.values(dataRow).forEach((val) => {
            var cell = row.append('td');
                cell.text(val);
            }
        );
    });
}

function clickHandler() {
    //prevent refresh of page
    d3.event.preventDefault();
    //get datetime value from the filter
    var date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    //if date was entered, then filter by that date
    if (date) {
        //filter to only keep rows where datetime = filtered value
        filteredData = filteredData.filter(row => row.datetime === date);    
    }
    buildTable(filteredData);
}

//add  event listener to the form button
d3.selectAll('#filter-btn').on('click', clickHandler);

//when page loads, build table
tableBuilder(tableData);