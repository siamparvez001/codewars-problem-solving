// Complete the square sum function so that it squares each number passed into it and then sums the results together.




function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        let squr = element ** 2
        // console.log(element)
        // console.log(squr)
        sum = sum + squr
        
        // console.log(sum)
    }
    // console.log(sum)
    return sum
}
squareSum([1, 2, 3, 4, 5])