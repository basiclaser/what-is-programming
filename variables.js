const username = "Chris"
const email = undefined
const address = "?????????"
let nickname = "chris-0x73"
let githubName = "chris-0x73"
var phoneNumber = 30129302193
let isOnline = true

// LET has a "block scope"

if (email === undefined) {
    var phoneNumber = 1010101
    let isOnline = false
    console.log(isOnline)
}
nickname = "bob"
console.log(nickname, phoneNumber, isOnline)

// "DEFENSIVE" programming