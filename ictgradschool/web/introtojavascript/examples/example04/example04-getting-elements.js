/**
 * This function is called when the page loads (i.e. <body onload="modifyElements()">).
 *
 * It uses document.querySelector() and similar functions to get information about elements on the page.
 */
function getInfoAboutElements() {

    // Get all <p> elements on the page
    const allPs = document.querySelectorAll("p");
    // const allPs = document.getElementsByTagName("p"); // This line would also achieve the same effect.

    // allPs is an array and can be used in the same way - including using for-loops to iterate through.
    for (let i = 0; i < allPs.length; i++) {

        console.log(`Paragraph #${i}`);

        const p = allPs[i];

        // If you log an HTML element directly to the console, the browser console will give you a really nice view
        // of that element. If you mouse-over the element in the console, it will even highlight that element
        // on the page!
        console.log(p);
    }


    // Get the element with the "amazingParagraph" id.
    // querySelector() can be used over querySelectorAll() when we know there will only be one result (or we only care about the first result).
    const amazingP = document.querySelector("#amazingParagraph");
    // const amazingP = document.getElementById("amazingParagraph") // This line would do the same thing.

    console.log("amazingP.inneHTML:");
    console.log(amazingP.innerHTML); // innerHTML contains the content of the element.


    // Get all images inside elements with the "card" class. On the example page, this should get the two cat images,
    // but not the "200 x 200" placeholder image.
    // This shows how querySelectorAll can be used with more complex CSS selectors than just single items.
    const catImages = document.querySelectorAll(".card img");

    console.log("Cat images in webpage:");
    catImages.forEach(function (img) {
        console.log(img.src); // src contains the source of an <img> or <script> element.
    });

}