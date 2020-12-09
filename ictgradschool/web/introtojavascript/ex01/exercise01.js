window.onload = function () {


// Get a list of paragraphs
    const paras = document.querySelectorAll("p");

// Get the number of paragraphs
    const numParas = paras.length;

// Append the number of paragraphs to the "num-paras" <div>
    const div = document.querySelector("#num-paras");
    div.innerHTML = `There are <strong>${numParas}</strong> paragraphs in this document!`;

};