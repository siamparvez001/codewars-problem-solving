// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.




function disemvowel(str) {
    let newStr = ""
    let vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        const letter = str[i]
        
        for (let i = 0; i < vowel.length; i++) {
            const singleVowel = vowel[i]
            if (singleVowel === letter) {
                newStr = str.replaceAll(/[aeiouAEIOU]/g, "")     
            }
            else{
                return ""
            }
        }
    }
    console.log(newStr)
    // return newStr
}
disemvowel("N")
