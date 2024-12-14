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
    var fishView = document.createElement("table");
    fishView.setAttribute("id", "fishView");
    document.getElementById("fish").appendChild(fishView);

    var tbody = fishView.createTBody();
    
    // name
    var row = tbody.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = fish.name;
    cell1.colSpan = 2;

    // picture

    // localtion + shadow

    // months + time

    // price

    });