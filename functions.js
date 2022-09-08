// WHAT IS A FUNCTION?
// a tiny block of logic

// FUNCTION
function sayHello() {
    console.log("hello")
}

// "invoking" a function
// "calling" a function
// "using"
// sayHello()

// FUNCTION WITH INPUT
//                  ↓↓↓↓↓ argument
function sayHelloTo(name) {
    console.log("hello " + name)
}
//sayHelloTo("bob")


// FUNCTION WITH OUTPUT (RETURN KEYWORD)
// its extremely that one computer program
// lives alone.

const unformattedName = "bOB "
function cleanName(original) {
    return original.toLowerCase().trim()
}

// "fluent interface"
[5, 4, 3, 2, 1].sort()
[1, 2, 3, 4, 5].reverse()
[5, 4, 3, 2, 1]

const cleanedName = cleanName(unformattedName)
console.log(unformattedName, cleanedName)


// FUNCTION THAT CONSOLE.LOGS THE DATE
// FUNCTION THAT OUTPUTS THE DATE

// SYNTAX STYLES
// REGULAR NAMED FUNCTION

// ANONYMOUS FUNCTION

// ANONYMOUS ARROW FUNCTION

// ARROW IMPLICIT RETURN 

// ARROW IMPLICIT RETURN OBJECT