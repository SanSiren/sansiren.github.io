var artsList = document.createElement("table");
artsList.setAttribute("id", "artsList");
document.getElementById("arts").appendChild(artsList);

var cell;
var row1;
var row2;
var tbody = artsList.createTBody();

// ...?
//row1 = tbody.insertRow(-1);

// Jolly - ... Academic - ...
row2 = tbody.insertRow(-1);
cell.innerHTML = '<a href="art.html?name=jolly"><img src="./images/arts/jolly_painting_real.jpg" title="Jolly Painting" alt="Jolly Painting"></br>Jolly Painting</a>';
cell = row2.insertCell(0);

cell.innerHTML = '<img src="./images/arts/empty.jpg" title="Academic Painting" alt="Academic Painting">';
cell = row2.insertCell(1);

cell.innerHTML = '<img src="./images/arts/empty.jpg" title="Academic Painting" alt="Academic Painting">';
cell = row2.insertCell(2);

