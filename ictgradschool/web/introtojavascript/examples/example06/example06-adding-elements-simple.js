window.onload = function () {

    /**
     * This function is created when the page loads, and will add some HTML elements to the page.
     */
    function createElements() {

        // Get the div to which we're adding stuff
        const div = document.querySelector(".container");

        // Create and add a paragraph
        const para = document.createElement("p");
        para.innerHTML = "This is a paragraph!";
        div.appendChild(para);

        // Create and add an ordered list
        const ol = document.createElement("ol");
        ol.setAttribute("type", "A"); // A, B, C.....

        // Create some list items to add to the list
        for (let i = 0; i < 10; i++) {
            const li = document.createElement("li");
            li.innerHTML = `Element #${i + 1}`;

            // Add the <li> to the <ol>
            ol.appendChild(li);
        }

        // Add the <ol> to the <div>
        div.appendChild(ol);

    }

    createElements();
};
