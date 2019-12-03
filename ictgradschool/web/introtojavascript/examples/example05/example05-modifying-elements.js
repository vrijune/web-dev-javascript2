/**
 * This function is called when the button is clicked.
 *
 * It uses document.querySelector() and similar functions to get information about elements on the page.
 */
function modifyElements() {

    // Set the color of all <h1> elements to dark green
    const h1s = document.querySelectorAll("h1");
    h1s.forEach(function (h1) {
        h1.style.color = "darkgreen";
    });

    // Set the text of the container div's third paragraph to "Hello, world!" and set its color to red.
    const thirdParagraph = document.querySelector(".container > p:nth-of-type(3)");
    thirdParagraph.innerHTML = "Hello, World! Hello, World! Hello, World! Hello, World!";
    thirdParagraph.style.color = "red";

    // Give the first cat image a red border.
    // The selector ".card img" will match both cat images, but querySelector will only return the first one that matches.
    const cheetahImage = document.querySelector(".card img");
    cheetahImage.style.border = "3px solid red";

    // Change the image src of the second cat image.
    // Here, I've gotten the second element by indexing the array returned by querySleectorAll
    const tigerImage = document.querySelectorAll(".card img")[1];
    tigerImage.src = "../../assets/meow.jpg";
}