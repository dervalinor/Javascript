//Operadores

/*operador de asignacion: asigna un valor al operando de la izquierda basado en el valor del operando de la derecha, 
estos operadores son: */ 

//Asignacion x = y 
//Asignacion de adiccion x += y lo cual es igual a decir x = x + 1 
let number1 = 4;
number1 += 3; //para indicar la operacion de number = number + 3
document.write(number1); //Document.write() es similar a alert() pero imprime el resultado en el
//body del website en vez de en forma de mensaje de alerta


//Asignacion de sustraccion x -= y igual a decir x = x - y
//Asignacion de multiplicacion x *= y igual a x = x*y
//Asignacion de division x /= y igual a x = x/y
//Asignacion de resto x %= y igual a x = x%y
let number2 = 4, number3 = 3;
number2 %= number3;
document.write(number2);

//Asignacion de potenciacion x **= y igual a x = x**y
//Asignacion de desplazamiento a la izquierda x <<= y igual a x = x << y
//Asignacion de desplazamiento a la derecha x >>= y igual x = x >> y
//Asignacion sin signo desplazamiento a la derecha x >>>= y igual x = x >>> y 
//Asignacion AND x &= y igual a x = x & y
//Asignacion XOR x ^= y igual a x = x^y 
//Asignacion OR x |= y igual a x = x | y
 
/*Operadores aritmeticos: los operadores toman valores numericos (ya sean literales o variables) 
como sus operandos y retornan un valor numerico unico, estos operadores son suma +,resta -,division /,multiplicacion *,potenciacion ** */

let number4 = 5, number5 = 8;

Result = number4/number5;
document.write("Resultado: " + Result);
