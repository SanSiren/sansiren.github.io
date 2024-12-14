// Fetch data from JSON file for convenience
var source = "data/bugs.json";
fetch(source)
  .then((response) => response.json())
  .then((data) => {
    var bugs = data.bugs;
    console.log(bugs);
    
    // create bugs table like in Critterpedia
    var bugList = document.createElement("table");
    bugList.setAttribute("id", "bugList");
    document.getElementById("bugs").appendChild(bugList);

    var tbody = bugList.createTBody();
    // 5 rows
    for (var i = 1; i <= 5; i++) {
      // add in last position, JS is stupid...
      var row = tbody.insertRow(-1);
      // 15 columns
      for (var j = 0; j <= 75; j = j + 5) {
        {
          // all bugs
          var index = i + j;
          var cell = row.insertCell(j / 5);
          // picture as link
          var html = '<a href="bug.html?index=' + index + '">';
          html +=
            '<img src="./images/bugs/' +
            index +
            '.jpeg" title= "' +
            bugs[index].name +
            '" alt="not found yet">';
          html += "</a>";
          html += "";
          cell.innerHTML = html;
        }
      }
    }
  });