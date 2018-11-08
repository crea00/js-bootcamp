/**
 *  Logical "And" and "Or" operators
 */

// Logical And Operator - True if both sides are ture. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

let temp = 55;

if(temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out');
} else if(temp <= 0 || temp >= 120) {
  console.log('Do not go outside');
} else {
  console.log('Eh. Do what you want');
}


// Challenge area

// Are both vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu.

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestTwoVegan && isGuestTwoVegan) {
  console.log('Onyl offer up vegan dishes');
} else if(isGuestOneVegan || isGuestTwoVegan) {
  console.log('Offer up some vegan options');
} else {
  console.log('Offer up anything on the menu');
}
