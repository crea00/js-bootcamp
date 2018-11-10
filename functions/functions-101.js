/**
 *  Function Basics
 *  - input(argument)
 *  - code
 *  - output(return value)
 */

let greetUser = function() {
  console.log('Welcone user!');
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);


// Challenge Area

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
};

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
