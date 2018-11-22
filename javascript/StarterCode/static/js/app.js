// from data.js
var tableData = data;
var filteredData = {};

var button = d3.select("#filter-btn");
var inputField = d3.select("#form-control");
var tbody = d3.select("tbody");



// This function is triggered when the button is clicked
function handleClick() {
    event.preventDefault()
    console.log("A button was clicked!");
    console.log(d3.event.target);

  var inputDate = d3.select("#datetime");
  var inputState = d3.select("#state");
  var inputShape = d3.select("#shape");


  console.log(inputState);

    // Get the value property of the input element
  var dateValue = inputDate.property("value");
  var stateValue = inputState.property("value");
  var shapeValue = inputShape.property("value");

  console.log(dateValue);
  console.log("state");
  console.log(shapeValue);

  filteredData = tableData;
  if (dateValue != 'all') {
    filteredData = tableData.filter(ufo => ufo.datetime === dateValue);
  }
  if (stateValue != 'all'){
    filteredData = filteredData.filter(ufo => ufo.state === stateValue);
  }
  if (shapeValue != 'all'){
    filteredData = filteredData.filter(ufo => ufo.shape === shapeValue);
  }

  // if (inputState == 'a'){
  //   filteredData = filteredData;
  // }
  // else {
  //   filteredData = filteredData.filter(ufo => ufo.state === stateValue);  
  // }

  //console.log(filteredData);

  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  // want to put a next query button
  // <form><input type=button value="Refresh" onClick="window.location.reload()"></form> 

  }); 


 //   var newDate = inputField.text();
    // We can use d3 to see the object that dispatched the event
    
   // console.log(newDate);
  //  data.forEach((ufoSighting) => {
  //   var row = tbody.append("tr");
  //   Object.entries(ufoSighting).forEach(([key, value]) => {
  //     var cell = tbody.append("td");
  //     cell.text(value);
  //   });
  // }); 
  
  }

button.on("click", handleClick);



// YOUR CODE HERE!


// data.forEach((ufoSighting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
  
