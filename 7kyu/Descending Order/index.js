// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
// console.log(fruits.sort());



function descendingOrder(n) {
    return parseInt(
        n
            .toString()
            .split("")
            .sort()
            .reverse()
            .join("")
    );
}
descendingOrder(0)