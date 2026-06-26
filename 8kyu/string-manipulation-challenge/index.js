// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.




function removeChar(str) {
    let lengthOfNewStr = str.length - 1
    let newStr = ""
    if (str.length >= 2) {
      
        for (let i = 1; i < lengthOfNewStr; i++) {
            newStr = newStr + str[i]
        }
      
    }
    else if(str.length==2){
        return (" ")
    }
    return newStr
};
removeChar("Sim")
