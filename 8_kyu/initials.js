// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name){
  //Seperate the strings into two words Do I need to turn them into an array?
  //Find a method that gets the first letter of a word
  const fullName = name.split(' ')
  const initials = fullName.shift().charAt(0) + '.' + fullName.pop().charAt(0);
  
  return initials.toUpperCase()
}