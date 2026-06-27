function maxAndMin(numbers) {
    let number = numbers.split(" ")
    let max = parseInt(number[0])
    let min = parseInt(number[0])
    for (let i = 0; i < number.length; i++) {
        let num = parseInt(number[i])
        if (max < num) {
            max = num
            // console.log("max number is", max)
        }
        else if (min > num) {
            min = num
            // console.log("min number is", min)
        }
    }
    console.log(max, min)
}
maxAndMin("10 2 9 8 4 1")