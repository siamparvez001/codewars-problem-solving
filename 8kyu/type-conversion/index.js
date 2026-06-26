// We need a function that can transform a number (integer) into a string.



// method 1
function numberToString(num) {
    let number = num.toString()
    return number
}
numberToString(1234)

// method 2
function numberToString(num) {
    let str = '' + num
    return str
}
numberToString(1234)