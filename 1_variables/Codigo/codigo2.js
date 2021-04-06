string = "Cadena de texto";
number = 100;
boolean = true; // this data are 0 and 1
boolean1 = false;

//We can declare a variable with var, let or const (called scope of the variables)

var number1 = 1000; //var use for variable global 
let number2 = 2; /*let for a variable local for a block (a function, loop or conditional and only we can use this variable for this function not in other
function)*/
const PI = 3.1415; //Use for a value constant and never we can change the value of this variable

//Declare a variable

var variable1; // for declare a variable only we must give type of range (var, let or const) and give the name
alert(variable1); //show a error of undefined because we don't give the value of the variable 

var variable2 = 30; //initiation of the variable

let variable3 = 1; //the type of variable let we can modify

variable3 = 2;
alert(variable3);

const num = 2.71; //const must foreover initiation

/*Is a error write: 
const num;
num = 9;
*/

//Declare multiple variables

let num1, num2, num3 = 70;

//Hoisting: order of execute a program

// Null and Nan;

var A = null; //indicate value of variable is empty

let numA = 2;
let numB = "a";

alert(numA*numB); //Error NaN for indicate Not a Number, when a operation must make with number

//prompt
prompt("Hallo Programierer: "); //ask information to the user