/**
 *  Object Basics
 */

let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);


// Challenge area

// name, age, location
let me = {
  name: 'Jerome',
  age: 29,
  location: 'Seoul'
};

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);

// Increase age by 1 and print message again
me.age = me.age + 1
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);