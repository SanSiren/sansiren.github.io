const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get("index");

// Fetch data from JSON file for convenience
var source = "data/fish.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var fishes = data.fish;
    fish = fishes[index];
    console.log(fish);
    // create single fish view

    // header
    var header = document.createElement("h1");
    header.innerHTML = fish.name;
    document.getElementById("header").appendChild(header);

    var fishView = document.createElement("table");
    fishView.setAttribute("id", "fishView");
    document.getElementById("fish").appendChild(fishView);

    var tbody = fishView.createTBody();
    
    // picture
    var row = tbody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var html = '<img src="./images/fish/' + index + '.jpeg" title= "' + fish.name + '" alt="not found yet">';
    cell1.innerHTML = html;
    cell1.colSpan = 2;

    // localtion + shadow

    // months + time

    // price

    });