alert("This alert defined in an external file. It runs as soon as the browser loads that file.");

function externalAlert() {
    alert("This alert is defined in a function in an external file. It runs as soon as the function is called.");
}

function pageLoadAlert() {
    alert("This alert defined in a function which is called once the page has finished loading.");
}