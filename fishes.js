// Fetch data from JSON file for convenience
var source = "data/fish.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var fish = data.fish;
    // see that all is there just in case
    console.log(fish);
    var fishList = document.createElement("table");
    fishList.setAttribute("id", "fishList");
    document.getElementById("fishes").appendChild(fishList);

    var tbody = fishList.createTBody();
    for (var i = 1; i <= 5; i++) {
      var row = tbody.insertRow(-1);
      for (var j = 0; j <= 75; j = j + 5) {
        {
          var index = i + j;
          var cell = row.insertCell(j / 5);
          var html = '<a href="fish.html?index=' + index + '" target="_self">';
          html +=
            '<img src="./images/fish/' +
            index +
            '.jpeg" title= "' +
            fish[index].name +
            '" alt="not found yet">';
          html += "</a>";
          html += "";
          cell.innerHTML = html;
          //cell.innerHTML =  "<img src=\"./images/fish/" + index + ".jpeg\" title= \"" + fish[index].name + "\" alt=\"not found yet\">";
        }
      }
    }
  });
