const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// Function to create a table
function buildTable(data) {
  const table = document.createElement("table");

  // Create header row
  const headerRow = document.createElement("tr");
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create data rows
  data.forEach((item) => {
    const row = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const cell = document.createElement("td");
      cell.appendChild(document.createTextNode(value));

      // Right-align cells containing numbers
      if (typeof value === "number") {
        cell.style.textAlign = "right";
        cell.classList.add("right"); // Add the right class
      }

      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return table;
}

// Append the generated table to the "mountains" div
document.getElementById("mountains").appendChild(buildTable(MOUNTAINS));
