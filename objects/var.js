/**
 *  Bonus: Variable with var
 * 
 *  var는  function-scoped
 *  const, let은 block-scoped
 * 
 *  ref: https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d
 */


// var (function-scoped)

// var는 function-scope이기 때문에 for문이 끝난 다음에 i를 호출하면 값이 잘 출력된다.
// 이것은 var가 hoisting 되었기 때문이다.
for(var j = 0; j < 10; j++) {
  console.log('j', j);
}
console.log('after loop j is ', j);   // after loop j is 10

// 아래의 경우에는 에러가 발생한다.
function counter() {
  for(var i = 0; i < 10; i++) {
    console.log('i', i);
  }
}
counter();
console.log('after loop i is', i);    // ReferenceError: i is not defined

// IIFE(immediately-invoked function expression)을 사용하면
// i is not defined가 된다.
(function() {
  // var 변수는 여기까지 hoisting이 된다.
  for(var i = 0; i < 10; i++) {
    console.log('i', i);
  }
})();
console.log('after loop i is', i);    // ReferenceError: i is not defined

// 이 코드를 실행하면 에러없이 after loop i is 10이 호출된다.
(function() {
  for(i = 0; i < 10; i++){
    console.log('i', i);
  }
})();
console.log('after loop i is', i);    // after loop i is 10

// 위 코드가 아무 에러없이 실행되는 이유는 i가 hoisting되어서 global variable이 되었기 때문이다.
var i
(function() {
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // after loop i is 10

// IIFE를 쓰는데 hoisting이 되는 상황을 방지하기 위해 use strict를 사용한다.
// 위 코드와 다르게 실행하면 i is not defined라는 에러가 발생한다.
(function() {
  'use strict'
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // ReferenceError: i is not defined


// let, const(block-scoped)

// JavaScript에는 그동안 var만 존재했기 때문에 아래와 같은 문제가 있었다

// 이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않는다.
var a = 'test';
var a = 'test2';

// hoisting으로 인해 ReferenceError가 발생하지 않는다.
c = 'test';
var c;

// let: 변수 재선언 불가능, 변수에 재할당 가능
let a = 'test';
let a = 'test2';    // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 'test3';        // 가능

// const : 변수 재선언, 재할당 모두 불가능
const b = 'test';
const b = 'test2';  // Uncaught SyntaxError: Identifier 'a' has already been declared
b = 'test3';        // Uncaught TypeError:Assignment to constant variable.  

// var가 function-scoped로 hoisting이 되었다면
// let, const는 block-scoped단위로 hoisting이 일어난다.
c = 'test';         // ReferenceError: c is not defined
let c;

// 위에 코드에서 ReferenceError이 발생한 이유는 tdz(temporal dead zone)때문이다.
// let은 값을 할당하기 전에 변수가 선언 되어있어야 하는데 그렇지 않기 때문에 에러가 난다.

// let은 선언하고 나중에 값을 할당가능하지만
let dd;
dd = 'test';
// const는 선언과 동시에 값을 할당해야한다.
const aa            // SyntaxError: Missing initializer in const declaration