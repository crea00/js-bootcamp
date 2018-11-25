// DOM - Document Object Model

// Query and Remove
// const p = document.querySelector('p');
// p.remove();

// Query all and Remove
const ps = document.querySelectorAll('p');

ps.forEach(function(p) {
  p.textContent = '******';
  // console.log(p.textContent); 
  // p.remove();
});