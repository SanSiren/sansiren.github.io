const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get("index");

// Fetch data from JSON file for convenience
var source = "data/sea.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var creatures = data.sea;
    creature = creatures[index];
    console.log(creature);
    // create single sea creature view

    // header
    var header = document.createElement("h1");
    header.innerHTML = creature.name;
    document.getElementById("header").appendChild(header);

    var creatureView = document.createElement("table");
    creatureView.setAttribute("id", "creatureView");
    document.getElementById("sea_creature").appendChild(creatureView);

    var tbody = creatureView.createTBody();
    
    // picture
    var row = tbody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var html = '<img src="./images/sea/' + index + '.jpeg" title= "' + creature.name + '" alt="not found yet">';
    cell1.innerHTML = html;
    cell1.colSpan = 2;
    cell1.style.textAlign = "center";
    cell1.style.padding = "25px";

    // shadow size + movement
    row = tbody.insertRow(-1);
    var cell2 = row.insertCell(0);
    cell2.innerHTML = "<b>Shadow Size:</b> <br>" + creature.shadow_size;
    cell2.style.textAlign = "center";
    cell2.style.width = "50%";

    var cell3 = row.insertCell(1);
    cell3.innerHTML = "<b>Movement:</b> <br>" + creature.movement;
    cell3.style.textAlign = "center";
    cell3.style.width = "50%";

    // months + time
    row = tbody.insertRow(-1);
    var cell4 = row.insertCell(0);
    cell4.innerHTML = "<b>Nothern Hemisphere:</b> </br>" + creature.months.northern + "</br> <b>Southern Hemisphere:</b> </br>" + creature.months.southern;
    cell4.style.padding = "15px";
    cell4.style.width = "50%";

    var cell5 = row.insertCell(1);
    cell5.innerHTML = "<b>Time:</b> <br>" + creature.time;
    cell5.style.padding = "15px";
    cell5.style.width = "50%";

    // price
    row = tbody.insertRow(-1);
    var cell6 = row.insertCell(0);
    cell6.innerHTML = "<b>Price:</b> <br>" + creature.price;
    cell6.style.textAlign = "center";
    cell6.colSpan = 2;
    
  });