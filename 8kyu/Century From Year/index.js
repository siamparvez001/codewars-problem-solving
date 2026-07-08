// Century From Year

function century(year) {

    let count = Math.floor(year / 100);
    if (year % 100 === 0) {
        return count;
    }
    else{
        return count + 1;
    }

}
century(2000)