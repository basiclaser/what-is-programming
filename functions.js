// WHAT IS A FUNCTION?
// a tiny block of logic

// "invoking" a function
// "calling" a function
// = using the function

// () PARENTHESES
// {} CURLY BRACKETS

// 0 // FUNCTION
function helloWorld() {
    console.log("functions log 0 >> ", "hello world")
}
helloWorld()


// 1 // FUNCTION WITH INPUT

function add(a, b) {
    console.log("functions log 1 >> ", a + b)
}

// // a "return value"
// 2 // FUNCTION WITH OUTPUT (RETURN KEYWORD)

function getNotifications() {
    return "you have no new notifications"
}
const notifications = getNotifications()
console.log("functions log 2 >> ", notifications)

// 3 // FUNCTION THAT CONSOLE.LOGS "functions log 3 >> ", THE DATE
function showDate() {
    console.log("functions log 4 >> ", new Date())
}
showDate()

// 4 // FUNCTION THAT RETURNS THE DATE
function getDate() {
    return new Date()
}
const theDateIGot = getDate()

// 5 // REGULAR NAMED FUNCTION
function nameOfTheFunction() {
    console.log("functions log 5 >> ", "this is what a regular function looks like")
}

// 6 // ANONYMOUS FUNCTION INSIDE ANOTHER FN 
setTimeout(function () {  // <- this function has no name :O 
    console.log("functions log 6 >> ", Math.random())
}, 1000)


7 // ANONYMOUS  FUNCTION SAVED INTO VARIABLE
// *ONE* reason is to avoid FUNCTION HOISTING 

const breakfast = function () {
    console.log("functions log 7 >> ", "pANCAKES")
}
console.log("functions log 8 >> ", breakfast())



// 7 // ANONYMOUS ARROW FUNCTION
const makingStuff = () => {
    console.log("functions log 9 >> ", "ITS WORKKKKK")
}
makingStuff()

8 // ARROW EXPLICIT RETURN
// const realisticIncome = () => {
//     const currentYear = "qowidjqwoidj"
//     const taxBracket = "owidjqwiodj"
//     const typeOfWorkers = "owidjqwiodj" 
//     return "math is complicated " + currentYear
// }
// console.log("functions log 10 >> ", realisticIncome())


const jan = 1000
const feb = 4000
// // 8 // ARROW IMPLICIT RETURN
const income = () => add(jan, feb)
console.log("functions log 11 >> ", income())


9 // ARROW IMPLICIT RETURN OBJECT

const someRandomNumber = (max) => Math.random() * max
console.log("functions log 12 >> ", someRandomNumber(100))

const yesOrNo = () => Math.random() > 0.5
console.log("functions log 13 >> ", yesOrNo())

const formatUserEmail = (email) => email.toLowerCase().trim()
console.log("functions log 14 >> ", formatUserEmail(" DonT@foRgetmY.emaIL     "))

// if you want to return an object from an arrow function 
// A) RETURN KEYWORD
const getUser = () => {
    return {
        name: "bob",
        age: 123,
        location: "SPACE"
    }
}

const getUserB = () => ({
    name: "bob",
    age: 123,
    location: "SPACE"
})

console.log("functions log 15 >> ", getUser(), getUserB())

10 // IIFE





// // YOU CANT DO ANYTHING AFTER "RETURN" IN A FUNCTION 
// function returnFiveThings() {

//     console.log("functions log 16 >> ", "function has finished processing values")
//     return "banana"
// }
// console.log("functions log 17 >> ", returnFiveThings())