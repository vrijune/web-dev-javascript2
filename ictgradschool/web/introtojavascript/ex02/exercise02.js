// The 'load' event listener means that the code will run once DOM elements have loaded
// This also means that code within the event listener will not be global to all code executing in the web browser
window.addEventListener("load", function () {


    function changePage() {
        // TODO Complete this

    }

    function makeBold() {
        // TODO Complete this

    }

    // This function call will run as soon as the DOM has loaded because it is nested inside the `window.onload` event listener
    changePage();

    document.querySelector("#makeBold").addEventListener("click", makeBold);

});

