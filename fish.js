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

    // localtion + shadow

    // months + time

    // price

    });