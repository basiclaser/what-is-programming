// WHAT IS A FUNCTION?
// a tiny program
// a tiny block of code 
// can have an input 

let student = "bruno"

function printReceipt() {
    console.log(`
        ${new Date}
    thanks for shopping at blablabla store    
    
    apples
    bananas
    
    TOTAL: 12839.321
    `)
}
printReceipt()
// TRADITIONAL WAY ///////////////////////////

function sayHello(name) {
    console.log("hello " + name)
}
// sayHello("Arthi")

// anonymous function ///////////////////////////
setTimeout(function () {
    console.log("i waited 2 seconds")
}, 2000)

// arrow function
setTimeout(() => {
    console.log("i waited 2 seconds")
}, 2000)


let myRegularFunction = function () {
    console.log("i waited 2 seconds")
}

let myArrowFunction = () => {
    console.log("i waited 2 seconds")
}