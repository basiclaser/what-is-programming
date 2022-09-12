

// YESTERDAY 
const rightNow = Date.now()
// this is a simple way to get the amount of time in a day in milliseconds. JavaScript uses Milliseconds primarily for time.
const oneDayInMilliseconds = 1000 * 60 * 60 * 24
console.log("dates log 0 >>", new Date(rightNow - oneDayInMilliseconds)) // <- this prints a date object representing yesterday

// CHALLENGE - HOW WOULD YOU GET THE DATE OF TOMORROW? 

// UNIX TIMESTAMP 
// this is how computers tell time - the number of seconds since january 1st 1970 midnight. looks like 102938120938218
console.log("dates log 1 >>", Date.now()) // <-- UNIX time in javascript


// get the name of the day in english, starting from a date object.
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date()
var todayAsNumber = date.getDay()
console.log("dates log 2 >>", `today is ${dayNames[todayAsNumber]}`)

// you can create a "date object" from a pre-defined date like this 
const date2 = new Date(1662970182728);
console.log("dates log 3 >>", date2)

// TIME ZONE OFFSET :O 
const offset = date.getTimezoneOffset();
console.log("dates log 4 >>", offset);

// CURRENT YEAR!
console.log("dates log 5 >>", date.getFullYear())
