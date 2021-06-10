//Funciones de agrupacion
//console.group("Name of the group");//create a group with its name, where we can write code in this section, if we wrote console.group we will creating other group inside of first group
//console.groupEnd(); //we can delete the group
//console.groupCollapse("Name of the group"); //show the group closed

//Funciones de temporizacion

//console.time(); //start timing device, use for know the time of execution of
//the code
//console.timeLog(); //show the time passed
//console.timeEnd(); //finish the timing device

//Create a function and show the time of execution of this function

let a, b, c;

console.time() //start count time

function sum(a, b){
  console.timeLog();
  return a + b;
}

sum(9,8);
console.timeEnd(); //finish execution 

console.log("%cEngel", "color:red; background:blue;padding:20px");//modify the style of the letter and color, as CSS
