/*
Objeto math - Basico 

Metodos

sqrt() - Devuelve la raiz cuadrada de un numero positiva de un numero
cbrt() - Devuelve raices cubicas de un numero
max() - Devuelve el mayor de cero o mas numeros
min() - Devuelve el menor de cero o mas numeros
random() - Devuelve el numeros pseudo-aleatorio entre 0 y 1
round() - Devuelve el numero redondeado al numero entero mas cercano 
fround() - Devuelve la representacion flotante de precision simple mas cercana de un numero
floor() - Devuelve el mayor entero, menor que o igual a un numero 
trunc() - Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios

Propiedades

PI
SQRT1_2
SQRT2

E
LN2
LN10
LOG2E
LOG10E

 */

let raiz = Math.sqrt(81);
console.log(raiz);

let raiz_cubica = Math.cbrt(27);
console.log(raiz_cubica);
console.log(" ");

//max receive very numbers 
let numbers = Math.max(4, 6, 100, 3); //return el number most greatest
console.log(numbers);

numbers = Math.min(4, 6, 100, 3); //return el number most lessest
console.log(numbers);

console.log(" ");
numbers = Math.random(); //aleatory number between 0 and 1
console.log(numbers)

numbers = 1.98;
let result = Math.round(numbers); //1.98 to 2 round
console.log(result);

numbers = 2.9; //return 2 not 3
result = Math.floor(numbers);
console.log(result);

numbers = 9.7809999;//round to number more near in the case 9999
result = Math.fround(numbers);
console.log(result);

numbers= 9.801; //delete the number decimal and show the part enteger
result = Math.trunc(numbers);
console.log(result);

numbers = Math.PI; //show the representation of the number pi
console.log(numbers);

numbers = Math.SQRT1_2;//show the square root of 1/2
console.log(numbers);

numbers = Math.SQRT2; //show the square root of 2
console.log(numbers);

numbers = Math.E; //show the constant of Euler
console.log(numbers);

numbers = Math.LN10;//logarithm natural of ten
console.log(numbers);

numbers = Math.LOG2E;//logaritmo de number Euler in base 2
console.log(numbers);
