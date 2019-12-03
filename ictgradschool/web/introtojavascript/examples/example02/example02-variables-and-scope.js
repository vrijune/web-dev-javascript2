// A constant value defined globally
const globalConst = "Hello";

function varScopeDemo() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i); // This line will work fine (and print "10"), because variables defined using "var" have function scope.
}

function letScopeDemo() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i); // This line will FAIL, because variables defined using "let" have block scope (in this case, i is only accessible within the for-loop).
}

function constDemo() {

    const someConstant = "Foo";

    someConstant = "Bar"; // This line will FAIL, because variables defined using "const" can't be reassigned once they're set.

}

function namingConflictDemo() {

    const globalConst = "World";
    console.log(globalConst); // Will print "World", because the "innermost" version of globalConst is used.

}