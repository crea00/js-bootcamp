/**
 *  Multiple Arguments and Argument Defaults
 */

 // Mulitple arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' - Score: ' + score;
};

let scoreText = getScoreText(99);
console.log(scoreText);


// Challenge area

let getTip = function(total, tipPercent = .2) {
  return total * tipPercent;
};

let tip = getTip(40, .25);
console.log(tip);
