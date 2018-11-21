const todos = [{
  text: 'Order cat food',
  completed: false
}, {
  text: 'Clean kitchen',
  completed: false
}, {
  text: 'Buy food',
  completed: false
}, {
  text: 'Do work',
  completed: true
}, {
  text: 'Exercise',
  completed: true
}];

// This is mine!
// const deleteTodo = function(todos, todoText) {
//   for(let i = 0; i < todos.length - 1; i++) {
//     if(todos[i].text.toLowerCase() === todoText.toLowerCase()) {
//       todos.splice(i, 1);
//     };
//   };
// };

// This is in Udemy
const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if(index > -1) {
    todos.splice(index, 1);
  };
};

deleteTodo(todos, 'buy food');
console.log(todos);