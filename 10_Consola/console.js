/*
console.log()  - print message in the console 

Funciones de registro

assert() - aparece un mesaje de error en la consola si la afirmacion es falsa. si la afirmacion es verdadera no aparece nada.*/

//console.assert(5 < 3);//show error Assertion failed because 5 > 3

//console.clear() - clear the console

//console.error() - show a error as a message
//console.error("Engel Valmar has cometido un error de sintaxis");

//console.info() - message of information for the user
//console.info("Aprende a manejar nodejs para ejecutar codigo javascript sin navegador");

//console.table() - this function take a argument obligatory, data, it must be
//a array or object and parameter: columns and show a table in console.
//console.table([3,3,5,2,6,7]);

//console.warn() - show a warning to the user about possible error
//console.warn("Cuidado con las variable de tipo global, es recomendable usar variable locales");

//console.dir() - other way of show a array
//console.dir([2, 4, 5, 7]);

//function of count
//console.count(); //show how many repeat a function or code (as i++)
//console.countReset(); //return value initial for count

//Example: 

function sum(a, b){
  c = a + b;
  console.count();//count how many use the function
  return c;
}

sum(2, 3);
sum(4,6);
console.countReset();//reboot the value of count
