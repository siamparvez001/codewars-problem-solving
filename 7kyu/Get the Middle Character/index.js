// Get the Middle Character

function getMiddle(s) {
    let length = s.length; 
    if(length%2!==0){
        let count = Math.floor(length/2);
        return s[count]
    }
    else if(length%2===0){
        let count = Math.floor(length/2);
        return(s[count-1]+s[count])
    }
}
getMiddle("A") // should return "A"