
var source = "data/sea.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var creatures = data.sea;
    console.log(creatures);

    var creatureList = document.createElement("table");
    creatureList.setAttribute("id", "creatureList");
    document.getElementById("sea_creatures").appendChild(creatureList);

    var tbody = creatureList.createTBody();
    // 5 rows
    for (var i = 1; i <= 5; i++) {
      var row = tbody.insertRow(-1);
      // 8 columns
      for (var j = 0; j <= 35; j = j + 5) {
        {
          var index = i + j;
          var cell = row.insertCell(j / 5);
          var html = '<a href="sea_creature.html?index=' + index + '">';
          html +=
            '<img src="./images/sea/' +
            index +
            '.jpeg" title= "' +
            creatures[index].name +
            '" alt="not found yet">';
          html += "</a>";
          html += "";
          cell.innerHTML = html;
        }
      }
    }
  });
