/**
 *  Exploring String Methods
 */

let name = '  Jerome ';

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());


// Challenge area

// isValidPassword
let isValidPassword = function(password) {
  return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$$%ˆ'));
console.log(isValidPassword('asdfpasdfpogijapassword'));
