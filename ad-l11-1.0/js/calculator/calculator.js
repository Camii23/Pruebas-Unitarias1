const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}
/*TAREA 1
function divide(a, b){
  return a / b;
}
*/
function multiply(a, b){
  return a * b;
}

/*TAREA 3: se modifica la funcion "divide" para que retorne NaN cuando se divida por 0*/
function divide(a, b) {
  if (b === 0) {
    return NaN;
  }
  return a / b
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};