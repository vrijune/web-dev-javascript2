/**
 * This is called when the user clicks the "add paragraph" button.
 */
function addParagraph() {

    // Get the div where we'll be adding the paragraphs.
    const div = document.querySelector(".paragraphContainer");

    // Create a paragraph
    const p = document.createElement("p");

    // How many paragraphs are there already?
    const count = div.childNodes.length;

    // Set its properties
    p.innerHTML = `This is paragraph number ${count + 1}`;

    // Add it to the div
    div.appendChild(p);

}

/**
 * This is called when the user clicks the "remove paragraph" button.
 */
function removeParagraph() {

    // Get the div with the paragraphs
    const div = document.querySelector(".paragraphContainer");

    // Get the last paragraph in there
    // NOTE See how we can use querySelector on nodes to only search those nodes' children!
    const p = div.querySelector("p:last-child");

    // Remove it
    p.remove();
}

/**
 * This is called when the user clicks the "create table" button.
 */
function createTable() {

    // Check if table already exists. If it does, display an error and quit the function.
    let table = document.querySelector("#theTable");
    if (table != null) {
        alert("Table already exists!");
        return;
    }

    // Get div where we'll be adding the table
    const div = document.querySelector(".tableContainer");

    // Create table
    table = document.createElement("table");

    // Set its properties
    table.id = "theTable";
    table.classList.add("table");

    // Create a header
    const thead = document.createElement("thead");
    const row = document.createElement("tr");
    const cell1 = document.createElement("th");
    cell1.innerHTML = "Column #1";
    const cell2 = document.createElement("th");
    cell2.innerHTML = "Column #2";

    // Add cells to row
    row.appendChild(cell1);
    row.appendChild(cell2);

    // Add row to thead
    thead.appendChild(row);

    // Create a table body
    const tbody = document.createElement("tbody");
    tbody.id = "theTableBody";

    // Add thead and tbody to table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Add table to div
    div.appendChild(table);

}

/**
 * This is called when the user clicks the "add row" button.
 */
function addRow() {

    // Get the table body
    const tbody = document.querySelector("#theTableBody");

    // if it doesn't exist, get outta here.
    if (tbody == null) {
        alert("Table doesn't exist. Create it first.");
        return;
    }

    // How many rows are there already?
    const count = tbody.childNodes.length;

    // Create some HTML as a String. This is another way we can add elements to the page.

    // This commented-out line is how we can do this using string concatenation.
    // const rowHTML = "<tr><td>Row " + count + ", column 1</td><td>Row " + count + ", column 2</td></tr>";

    // This uncommented line is how we can do it using JavaScript template strings!
    const rowHTML = `<tr><td>Row ${count}, column 1</td><td>Row ${count}, column 2</td></tr>`;

    tbody.innerHTML += rowHTML;

}

/**
 * This is called when the user clicks the "remove row" button.
 */
function removeRow() {

    // Get the table body
    const tbody = document.querySelector("#theTableBody");

    // if it doesn't exist, get outta here.
    if (tbody == null) {
        alert("Table doesn't exist. Create it first.");
        return;
    }

    // Delete the last child node
    tbody.querySelector("tr:last-child").remove();
}