const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get("index");

// Fetch data from JSON file for convenience
var source = "data/bugs.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var bugs = data.bugs;
    bug = bugs[index];
    console.log(bug);
    // create single bug view

    // header
    var header = document.createElement("h1");
    header.innerHTML = bug.name;
    document.getElementById("header").appendChild(header);

    var bugView = document.createElement("table");
    bugView.setAttribute("id", "bugView");
    document.getElementById("bug").appendChild(bugView);

    var tbody = bugView.createTBody();
    
    // picture
    var row = tbody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var html = '<img src="./images/bugs/' + index + '.jpeg" title= "' + bug.name + '" alt="not found yet">';
    cell1.innerHTML = html;
    cell1.colSpan = 2;
    cell1.style.textAlign = "center";
    cell1.style.padding = "25px";

    // localtion
    row = tbody.insertRow(-1);
    var cell2 = row.insertCell(0);
    cell2.innerHTML = "<b>Location:</b> <br>" + bug.location;
    cell2.style.textAlign = "center";
    cell2.style.width = "50%";

    // months + time
    row = tbody.insertRow(-1);
    var cell4 = row.insertCell(0);
    cell4.innerHTML = "<b>Nothern Hemisphere:</b> </br>" + bug.months.northern + "</br> <b>Southern Hemisphere:</b> </br>" + bug.months.southern;
    cell4.style.padding = "15px";
    cell4.style.width = "50%";

    var cell5 = row.insertCell(1);
    cell5.innerHTML = "<b>Time:</b> <br>" + bug.time;
    cell5.style.padding = "15px";
    cell5.style.width = "50%";

    // price
    row = tbody.insertRow(-1);
    var cell6 = row.insertCell(0);
    cell6.innerHTML = "<b>Price:</b> <br>" + bug.price;
    cell6.style.textAlign = "center";
    cell6.colSpan = 2;

  });