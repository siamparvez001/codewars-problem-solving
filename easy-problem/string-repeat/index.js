// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.



function repeatStr (n, s) {
    let result = ''
    for (let i = 0; i < n; i++) {
        console.log(s)
        result = result + s
    }
    return result
}

repeatStr (5, 'siam')