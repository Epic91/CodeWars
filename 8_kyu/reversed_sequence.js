// Build a function that returns an array of integers from n to 1 where n > 0
// Example: n = 5 --> [5, 4, 3, 2, 1]

const reverseSeq = n => {
    //create a variable and set it to an empty array
    let arr = []
    //for loop; if i is greater than 0, decrement
    for(let i = n; i > 0; i--){
      //push the results of i inside of arr
      arr.push(i);
    }
    //return arr
    return arr;
  };