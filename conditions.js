// EQUALITY OPERATORS 

// a === b "IS EQUAL TO"
// a !== b "IS NOT EQUAL TO"
// a > b "IS GREATER THAN"
// a < b "IS LESS THAN"
// a >= b " IS GREATER THAN OR EQUAL TO"
// a <= b " IS LESS THAN OR EQUAL TO"


// // IF vs IF ELSE 
// if you wanna in response to only ONE CONDITION, use if 
// if you wanna respond to MORE THAN ONE CONDITION use if else  




var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date()
var todayAsNumber = date.getDay()
if (dayNames[todayAsNumber] === "tuesday") {
    console.log("conditions log 0 >> ", "today is tuesday")
}

// if
if (4 !== 9) {
    console.log("conditions log 1 >> ", "yeh 4 is not 9 good job")
}
let username;
if (username !== undefined) {
    console.log("conditions log 2 >> ", "hello! " + username)
}


// if else 
const card = 9
const priceOfMilk = 8

function buySomething() {
    if (card >= priceOfMilk) {
        console.log("conditions log 3 >> ", "i got milk yay")
    } else {
        console.log("conditions log 4 >> ", "dont get milk")
    }
}

buySomething()


// other if else example
const userIsLoggedIn = true

function getMessages() {
    if (userIsLoggedIn === true) {
        return ["hi", "how are you", "yeh p gd"]
    } else {
        return "ERROR you need to log in to do that."
    }
}
console.log("conditions log 5 >> ", getMessages())


// other if else if else if else if else if else example

const income = 4
if (income === 18) {
    console.log("conditions log 6 >> ", "you pay this much tax")
} else if (income < 5) {
    console.log("conditions log 7 >> ", "you no pay no tax")
} else if (income < 10) {
    console.log("conditions log 8 >> ", "you pay 1% tax")
} else if (income < 15) {
    console.log("conditions log 9 >> ", "you pay 2% tax")
} else {
    console.log("conditions log 10 >> ", "please talk to your tax advisor")
}


// switch 
const season = "winter"

switch (season) {
    case "winter":
        console.log("conditions log 11 >> ", "wear a scarf")
        break;
    case "monsoon":
    case "rainy season":
        console.log("conditions log 12 >> ", "use an umbrella")
        break;
    case "summer":
        console.log("conditions log 13 >> ", "wear a hat")
        break;
    default:
        console.log("conditions log 14 >> ", "did not understand season")
}

// CONDITIONS PART TWO

// coercion
// == 
// === 

// if return 

// && 

// ||

// !!

// ternary

// EXISTENCE ? 