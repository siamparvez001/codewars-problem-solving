// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(sheep) {
    let sumTrue = 0
    for (let i = 0; i < sheep.length; i++) {
        const element = sheep[i];
        if (element === true) {
            sumTrue = sumTrue + element
        }
    }
    return (sumTrue)
}
countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])