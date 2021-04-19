/*Array: los arrays son objectos para guardar distintios tipos de datos (como un recipiente para guardar datos), donde
 podemos guardar muchos datos.
*/

//formas de declarar a array

let datos = ["Johan", 24, "Germany"];//donde cada elemento se separa por coma
document.write("Datos del array: " + datos); //solo con colocar el nombre nosotros puedemos ver los elementos de un array

//Mostrar un determinado elemento de un array 
//las posiciones de los array comienzan desde cero

document.write(" | Elemento de la posicion 2: " + datos[2]);//no son iguales la posicion del elemento y el numero de elementos

//array asociado: a cada posicion nosotros podemos poner a nombre determinado
//a esta posicion.

let pc = {
  //para nombar cada posicion colocar  el nombre de la posicion seguido de dos
  //puntos
  usuario : "Engel",//posicion 0
  ram : "16GB", //posicion 1
  espacio : "1TB"//posicion 2
}; //Nunca olvidar poner el punto y coma

document.write(" | Pc Ram: " + pc["ram"]);
