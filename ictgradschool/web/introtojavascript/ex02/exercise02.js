// The 'load' event listener means that the code will run once DOM elements have loaded
// This also means that code within the event listener will not be global to all code executing in the web browser
window.addEventListener("load", function () {


    function changePage() {
        // TODO Complete this
     let pinkDiv =document.querySelector("div");
       //let pinkDiv=document.getElementsByClassName("text1");
        pinkDiv.style.backgroundColor = "pink";



    let lastParagraph = document.querySelector("#footer");
    lastParagraph.style.color ="red";

    let secondDiv = document.querySelector(".text2");
    secondDiv.style.display = "none";




    document.querySelector("p").innerHTML = "Hello World";

    }






    function makeBold() {
        // TODO Complete this


        let boldP = document.querySelectorAll("p");
        for (let i = 0; i <boldP.length; i++) {
            boldP[i].style.fontWeight="bold";
        }
        // let result = boldP.bold();
    }




    // This function call will run as soon as the DOM has loaded because it is nested inside the `window.onload` event listener
    changePage();

    document.querySelector("#makeBold").addEventListener("click", makeBold);

});

