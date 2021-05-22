// import the data from data.js
const tableData =data;
//Reference the HTML table using d3
var tbody = d3.select('tbody');
//new function
function buildTable(data) {
    //first clear out any existing data
  tbody.html("");
    
    //Next, loop through each object in the data
  data.forEach((dataRow)=>{
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val)=>{
        let cell = row.append("td");
        cell.text(val);
        }
    );
  });
}

// new function to handle clicks
function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
//Check to see if a date was eneterd and filter the
//data using that date.
    if (date){
        //Apply 'filter' to the table data to only keep the 
        //rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Rebuild the table using filtered data
    //@NOTE: If not date was entered, the filteredData will 
    //just be the origibnal tableData.
    buildTable(filteredData);
}

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
