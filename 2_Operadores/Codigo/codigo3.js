/*Operadores intermedios:
- operadores logicos 
- operadores de comparacion 

Operadores comparacion: return true or false  

1. Equality a == b */

let number1 = 3;
let number2 = 3;

document.write(number1 == number2);//true porque number1 es igual a number2

//inequality a != b

//identify a === b: se pregunta si dos elementos son exactamente identicos

let text1 = "23";
let text2 = "Mi";

document.write(text1 === text2);
//mientras si colocamos == nos dice que son iguales
document.write(text1 ==  text2);

//Non-identify a !== b: para ver si son estrictamente diferentes

//Greater than a > b

//Greater than or equal a >= b

//less than a < b

//less than or equal a <= b 

/*Operadores logicos: Nos devuelven un resultado a partir que se cumpla una
condicion, el resultado es booleano*/

//operador logico AND &&
//Operador logico OR ||
//Operador logico NOT ! 

let NUM1 = 3;
let NUM2 = 9;

let val1 = NUM1 < NUM2;
let val2 = NUM1 != NUM2;

//true && true = true, false && true = false, es true si la dos condiciones son
//true

//true || true = true si una de la condiciones es verdadera OR devuelve true 
//!true = false (Not true = false)

let resultado1 = val1 && val2;//si las dos condiciones se cumplen entonces true
let resultado2 = val1 || val2;//si una de las dos condiciones se cumplen 
let resultado3 = !val2;//este operador retorna el valor opuesto 

document.write(" | condicion AND: " + resultado1);
document.write(" | condicion OR: " + resultado2);
document.write(" | condicion NOT: " + resultado3);

//camel case: la primera letra con minuscula y la segunda palabra con mayuscula
//Ejemplo : sumarDosNumeros
