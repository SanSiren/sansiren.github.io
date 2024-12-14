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
    });