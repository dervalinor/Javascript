//Bucles: una accion se repite hasta que deje de cumplirse una determinada
//condicion

//Bucle while

/*
 while(condicion){
  accion a realizar
 }
*/
document.write("<br>");
document.write("Bucle while: ");
document.write("<br>");

let n = 0;

while(n < 3){
  document.write(" | Hallo <br>");//dentro del document.write nosotros podemos ejecutar codigo html
  n++;
}

document.write("<br>");
document.write("<br>");

//do while: primero se realiza la accion y luego se verifica si la condicion se
//cumple
/*do {
  realizar accion
} while(condicion)
*/

document.write("Bucle do while: ");
document.write("<br>");
document.write("<br>");

let m = 0;

do {
  m++;
  document.write(m + " | ");
} while(m < 3);
document.write("<br>");
document.write("<br>");
//con la sentencia break hace que el bucle finalize o tambien un condicional
//Ejemplo crear un programa que busque en una array el numero 0
document.write("Encontrar el numero cero en el array: ");
let vector = [1, 3, 5, 0, 4, 6];

while(m < 6){
  if(vector[m] == 0){
    document.write("Numero encontrado en la posicion: " + m);
    break;//finaliza el programa cuando encuentra el numero cero
  }
  m++;
}
document.write("<br>");
document.write("<br>");

//existen dos tipos de bucles, el primero donde no les decimos cuantas vueltas
//van a dar (while y do while), mientras el for, for on y for of nosotros le
//indamos cuantas vueltas van a dar

//Ejemplo: crear un vector de un tamaño para 5 elementos

let arreglo = [];

alert("Dame 5 numeros: ");

for(var i = 0; i < 5; i ++){
  arreglo[i] = prompt("Numero " + m + ": ");
}

document.write("<br>");
document.write("<br>");
document.write("Elementos del arreglo: ");
for(let i = 0; i < 5; i ++){//compuestos por tres partes: declarar variable e inicializar, condicion y incremento o decremento de la variable (iterar)
  document.write(" " + arreglo[i]);
}

document.write("<br>");
document.write("<br>");

//sentencia continue para saltarse un elemento de terminada posicion
//serie de numeros donde nos saltamos el numero 2, 6 y 8

for(let i = 0; i < 10; i++){
  if(i == 2 || i == 6 || i == 8){
    continue;//salta es posicion pero el bucle continua
  }
  document.write(i + " ");
}

document.write("<br>");
document.write("<br>");

let cosas = ["Ram", "Disco duro", "Pantallo", "Procesador"];

for(cosa in cosas){ //iterar el array segun el tamaño del array sin necesidad de decirle hasta donde
  document.write(cosa + " ");//imprime todos las posiciones de los elementos del array  
}

//mientra el for in nos muestra los elementos del array, for of nos muestra las
//posiciones de los elementos
 
document.write("<br>");

for(cosa of cosas){
  document.write(cosa + " ");//imprime todos los elementos del array  
}
