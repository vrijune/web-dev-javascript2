window.addEventListener("load", function () {


    let time = document.getElementById("the-time");
    // let today = new Date();
     // today.getHours();
     // today.getMinutes();
     // today.getSeconds();
     // time.innerHTML = today.getHours().toString()+today.getMinutes().toString()+today.getSeconds();

     time.innerHTML= Date().toString();
});


