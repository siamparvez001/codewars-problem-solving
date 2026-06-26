// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelCount = 0
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let i = 0; i < vowel.length; i++) {
        const strVowel = vowel[i]
        
        for (let j = 0; j < str.length; j++) {
            const strings = str[j]
            
            if(strings==strVowel){
                vowelCount = vowelCount + 1
            }
        }
    }
      return vowelCount;
}
getCount("This is Siam Parvez")