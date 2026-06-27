// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.


function abbrevName(name) {
    let str = name.split(" ");
    let firstLetter;
    let first = [];
    let result;
    for (let i = 0; i < str.length; i++) {
        let word = str[i]
        firstLetter = word[0]
        first.push(firstLetter)
        let result = (first.toString())
        // console.log(first.join("."))

    }
    return first.join(".");
}
abbrevName("Siam Parvez")