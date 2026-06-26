// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    let num = numbers.split(" ")
    let high = Math.max(...num)
    let low = Math.min(...num)
    let max = parseInt(high)
    let min = parseInt(low)
    let maxAndMin = `${max} ${min}`
    console.log(maxAndMin)
    return maxAndMin
}
highAndLow("1 2 3")