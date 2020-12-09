window.addEventListener("load", function () {

    let techStackInfo = [
        {
            "technology": "Java",
            "type": "Backend programming language.",
            "description": "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers \"write once, run anywhere\" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
            "logoImage": "javaLogo.png"
        },
        {
            "technology": "JavaScript",
            "type": "Frontend programming language",
            "description": "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. ",
            "logoImage": "javaScriptLogo.jpg"
        },
        {
            "technology": "HTML",
            "type": "Markup Language",
            "description": "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
            "logoImage": "htmlLogo.png"
        },
        {
            "technology": "MySQL",
            "type": "Markup Language",
            "description": "MySQL is an Oracle-backed open source relational database management system (RDBMS) based on Structured Query Language (SQL). MySQL runs on virtually all platforms, including Linux, UNIX and Windows. Although it can be used in a wide range of applications, MySQL is most often associated with web applications and online publishing. MySQL is an important component of an open source enterprise stack called LAMP. LAMP is a web development platform that uses Linux as the operating system, Apache as the web server, MySQL as the relational database management system and PHP as the object-oriented scripting language.",
            "logoImage": "sqlLogo.png"
        }
    ];

    function generateContent() {
        generateNavContent();
        generateBodyContent();
    }

    function generateNavContent() {
        // This line stores a reference to the ul element in a const called 'navList'
        const navList = document.querySelector("ul");

        for (let i = 0; i < techStackInfo.length; i++) {
            const navItem = document.createElement("li");
            const navLink = document.createElement("a");

            navLink.innerText = techStackInfo[i].technology;
            // This will set the href attribute of the a/anchor elements so that they can be navigated to
            // You will need to set the ID attribute of elements to match these
            navLink.href = `#${techStackInfo[i].technology}`;

            navItem.appendChild(navLink);

            //TODO: append navItem to navList
            navList.appendChild(navItem);

        }

    }

    function generateBodyContent() {

        //TODO: store a reference to the div element with the class 'container' in a 'const'/constant called container
        const container = document.querySelector(".container");


        //TODO: create a for loop to iterate through all JSON objects in the techStackInfo array
        for (let i = 0; i < techStackInfo.length; i++) {


            //TODO: inside the loop:
            //TODO: create constants for all necessary elements (divs, headings, subheadings, paragraphs and images)
            const divs = document.createElement("div");
            const headings = document.createElement("h2");
            const subheadings = document.createElement("h3");
            const p = document.createElement("p");
            const images = document.createElement("img");
            //TODO: add the necessary text and attributes of the elements by retrieving information from the JSON objects when necessary

            images.src = "../assets/" + techStackInfo[i].logoImage;
            images.width = 50;
            images.style.marginLeft = "50px";
            subheadings.innerHTML = techStackInfo[i].type;
            headings.innerHTML = techStackInfo[i].technology;
            p.innerHTML = techStackInfo[i].description;

            //TODO: append all elements in the CORRECT ORDER from child to parent for them to display in the HTML document

            container.appendChild(divs);
            headings.appendChild(images);
            divs.appendChild(headings);
            divs.appendChild(subheadings);
            divs.appendChild(p);

        }

    }

    generateContent();

});