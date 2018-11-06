/**
 *  Booleans and Comparison Operators
 * 
 *  === - equality operator
 *  !== - not equal operator
 *  < - less than operator
 *  > - greater than operator
 *  <= - less than or equal to operator
 *  >= - greater than or equal to operator
 *    
 */


let temp = 180;

if(temp <= 32) {
  console.log('It is freezing outside!');
}

if(temp >= 110) {
  console.log('It is way to hot outside!');
}


// Challenge area

let age = 65;

// If 7 or under print message about child pricing
if(age <= 7) {
  console.log('You will get a child discount!');
}
// If 65 or older print message senior discount
if(age >= 65) {
  console.log('You will get a senior discount!');
}