// List Filtering

function filter_list(l) {
    let numArray = []
  for(let i=0;i<l.length;i++){
    if(typeof l[i]==="number"){
        numArray.push(l[i])
    }
  }
  return numArray;
}
filter_list([1,2,'a','b'])