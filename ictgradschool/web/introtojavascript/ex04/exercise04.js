window.addEventListener("load", function () {

    /**
     * This array represents a shopping list. The even-numbered indices are the items, and the odd-numbered indices are
     * the amounts required.
     *
     * This shopping list is for:
     * 3x Puppies
     * 8x Kittens
     * 2x Pikachus
     * 4x T-Rexes.
     */
    const shoppingList = [
        "Puppies", 3,
        "Kittens", 8,
        "Pikachu", 2,
        "T-Rex", 4
    ];


    /**
     * This function will create a shopping list and display it in the page's <tbody>
     */
    function createShoppingList() {
        // TODO Implement this
        // let myArray = ["Puppies","3","Kittens","8","Pikachu","2","T-rex","4" ];
     const div = document.querySelector("#table-body");
     for (let i = 0; i < shoppingList.length; i += 2)
     {
         const tr = document.createElement("tr");
         const td1 = document.createElement("td");
         const td2 = document.createElement("td");
         td1.innerHTML=shoppingList[i];
         td2.innerHTML= shoppingList[i+1];
         tr.appendChild(td1);
         tr.appendChild(td2);
         div.appendChild(tr);
     }

    }

    createShoppingList();

});