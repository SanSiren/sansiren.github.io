// Fetch data from JSON file for convenience
var source = "data/fish.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var fish = data.fish;
    // see that all is there just in case
    console.log(fish);
    // create fishes table like in Critterpedia
    var fishList = document.createElement("table");
    fishList.setAttribute("id", "fishList");
    document.getElementById("fishes").appendChild(fishList);

    var tbody = fishList.createTBody();
    // 5 rows
    for (var i = 1; i <= 5; i++) {
      // add in last position, JS is stupid...
      var row = tbody.insertRow(-1);
      // 15 columns
      for (var j = 0; j <= 75; j = j + 5) {
        {
          // all fish
          var index = i + j;
          var cell = row.insertCell(j / 5);
          // picture as link
          var html = '<a href="fish.html?index=' + index + '">';
          html +=
            '<img src="./images/fish/' +
            index +
            '.jpeg" title= "' +
            fish[index].name +
            '" alt="not found yet">';
          html += "</a>";
          html += "";
          cell.innerHTML = html;
        }
      }
    }
  });
