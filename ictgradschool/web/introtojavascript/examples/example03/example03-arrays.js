// Declaring arrays
const myFirstArray = ["Hello", "World", "Foo", "Bar"]; // An array with existing content
const mySecondArray = []; // An empty array

// Looping through arrays
console.log("myFirstArray.length = " + myFirstArray.length);
for (let i = 0; i < myFirstArray.length; i++) { // Same as Java
    console.log(`myFirstArray[${i}] = ${myFirstArray[i]}`); // Same as Java
}

// Looping through arrays with forEach
myFirstArray.forEach(function (element, index) {
    console.log(`myFirstArray[${index}] = ${element}`);
});

// Adding new elements
mySecondArray.push("Feb"); // Add "Feb" to the end of mySecondArray
mySecondArray.push("Mar"); // Add "Mar" to the end of mySecondArray
mySecondArray.push("Apr"); // Add "Apr" to the end of mySecondArray
mySecondArray.unshift("Jan"); // Add "Jan" to the beginning of mySecondArray
mySecondArray[mySecondArray.length] = "May"; // Add "May" to the end of the array (alternative method)
mySecondArray[7] = "Aug"; // Add "Aug" to index 7 of the array. As the array previously only went up to index 4, this will leave two blank spaces.
console.log(`mySecondArray[5] is: ${mySecondArray[5]}`); // Will print "undefined", which is a special JavaScript value for variables and array elements that haven't been set.

mySecondArray.splice(5, 2, "Jun", "Jul"); // Delete two elements in the array starting at position 5 (the two "undefined" elements) and replace them with "Jun" and "Jul".

console.log(mySecondArray); // Can print out a whole array very easily for debug purposes.

// Using the array like a stack. In this case, loop through, popping values off the end of the array, until there are none left.
// Should print the months in reverse order.
while (mySecondArray.length > 0) {
    const month = mySecondArray.pop();
    console.log(month);
}