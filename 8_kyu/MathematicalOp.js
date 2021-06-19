/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

//OUTPUT: basicOp('+', 4, 7) => 11

function basicOp(operation, value1, value2){
    //loop; condition; operations +, -, *, /
    if (operation === '+'){
      return value1 + value2
    } else if (operation === '-'){
      return value1 - value2
    } else if (operation === '*'){
      return value1 * value2
    } else if (operation === '/'){
      return value1 / value2
    }
  }

//Using Switch 
switch (operation) {
    case '+':
        return value1 + value2;
    case '-':
        return value1 - value2;
    case '*':
        return value1 * value2;
    case '/':
        return value1 / value2;
    default:
        console.log('Must be +, -, *, /')
        break;
}