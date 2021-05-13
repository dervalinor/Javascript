/*
 
metodos de cadena 

Metodos para buscar en cadenas

-concat() - Junta dos o mas cadenas y retorna una nueva 

-startsWith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
-endsWith() - si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
-includes - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
-indexOf() - devuelve el indice del primer caracter, si no existe, devuelve -1
-lastIndexOf() - devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1

Metodos para rellenar o repetir cadenas

-padStart() - rellena la cadena al principio con los caracteres 
-padEnd() - Rellena la cadena al final con los caracteres deseados
-repeat() - devuelve la cadena repetida un numero determinado de veces

Ahora veamos metodos para convertir cadenas

-split() - Divide la cadena como le pidamos 
-substring() - Nos retorna un pedazo la celda que se seleccione
-toLowerCase() - Convierte una cadena a minusculas
-toUpperCase() - Convierte una cadena a mayusculas
-toString() - Metodo que devuelve una cadena que representa al objeto especificado
-trim() - Elimina los espacios en blanco al principio y al final de una cadena 
-trimEnd() - elimina los espacios en blanco al final de la cadena 
-trimStart() - elimina los espacios en blanco al comienzo de una cadena 
-valueOf() - retorna el valor primitivo de un objecto de un string 

 */

let mensaje_1 = "Hallo Programmierer";//as Javascript all is a object
//let mensaje_1 = new String("Hallo Programmierer") is equal, mensaje_1 is
//a object of the class String 
let mensaje_2 = ", User Linux";

result = mensaje_1.concat(mensaje_2);
console.log(result);

mensaje_1 = "Hallo Linux";
mensaje_2 = "Hallo";

result = mensaje_1.startsWith(mensaje_2); //is true because mensaje_1 start with mensaje_2 
console.log(result);

result = mensaje_1.endsWith(mensaje_2);//is false because not fishined in the same string
console.log(result);

mensaje_1 = "Hallo Programmierer Programmierer";
mensaje_2 = "Programmierer";

result = mensaje_1.includes(mensaje_2);//true because mensaje_2 is inside of mensaje_1
console.log(result);

result = mensaje_1.indexOf("Programmierer");//search the word programmierer in mensaje_1 and indicate the position 
//of the first letter of this word (in this case is letter P)
console.log(result);
console.log(mensaje_1[0]);//show the element in the position zero for this case is the letter H 

result = mensaje_1.lastIndexOf("Programmierer");//show the position of the first letter but of the last word find 
console.log(result);

mensaje_1 = "Hi";
result = mensaje_1.padStart(14, "Hallo "); //fill in with the word "Hallo" until beginning string have 14 characters
console.log(result);

result = mensaje_1.padEnd(14, " Hallo");//fill in with the word " Hallo" but end of string
console.log(result);

mensaje_1 = "Himmel ";
result = mensaje_1.repeat(3); //repeat the string 3 time
console.log(result);

mensaje_1 = "Himmel,Sky,Cielo";
result = mensaje_1.split(","); //divide el array for comma
console.log(result);
console.log(result[2]);//show the string "Cielo" because the string is divide for the comma

result = mensaje_1.substring(3, 10); //create a new string where this beginning in the position 3 and finish
//in the position 10
console.log(result);

result = mensaje_1.toLowerCase(mensaje_1);
console.log(result);

result = mensaje_1.toUpperCase(mensaje_1);
console.log(result);

mensaje_2 = 123;
result = mensaje_2.toString(); //convert a string
console.log(result);//123 isn't number, is a string

mensaje_2 = "  Engel ";
console.log(mensaje_2[0]); //show the first space is empty
result = mensaje_2.trim();
console.log(result[0]); //now show the first letter of word Engel because trim 
//remove the space empty, trimStart delete the space start and trimEnd delete
//the space of end of string

/* Metodos de Arrays:
 
 Metodos Transformadores
 
 - pop() -  elimina el ultimo elemento de array y lo devuelve 
 - shift() -  elimina el primer elemento del array y lo devuelve 
 - push  - agrega un elemento del array al final de la lista 
 - reverse  - invierte el orden de los elementos de un array 
 - unshift()  - agrega uno o mas elementos al inicio del array y devuelve la longitud del nuevo array
 - sort()  - ordena los elementos de un array localmente y devuelve el array ordenado
 - splice - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

Accesores

- join()  - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve
- slice()  - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
 */

let Name = ["Emma", "Norman", "Ray", "Lina", "Sophie"];
console.log("Original array: " + Name);
result = Name.pop();
console.log("Remove element: "  + result);//show the last element delete of the array
console.log("New array: " + Name);//list where the last element is delete

result = Name.shift();
console.log("First element delete: " + result);

result = Name.push("Valmar", "Ellian"); //add a element to end of the array 
console.log(result); //show the lenght of the new array
console.log(Name);

result = Name.reverse();
console.log(result);//reverse order of array


result = Name.unshift("Angelica", "Jhon");//add new element of the array but add the elements 
//beginnig of the array
console.log(Name);

Numeros = [1, 5, 2, 8, 9, 10, 3];
result = Numeros.sort(); //ordered of the array too use for ordered according ot alphabetical 
console.log(result);

result = Name.sort();
console.log(result);

result = Name.splice(1,3,"Camilo"); //start of position 1 and delete here three elements and add a new element 
console.log(Name);


