/*clases, classList y metodos de classList

- Definicion y usos 
- add() - añade una clase
- remove() - remueve una clase
- item() - devuelve la clase de indice especificado 
- contains() - verifica si el elemento posee o no, la clase especificada
- replace() - remplaza una clase por otra 
- toggle() - si no tiene clase especificada, la agrega, si ya la tiene, la elimina

*/

//add
const titulo = document.querySelector(".titulo");
titulo.classList.add("bigger");

//remove
titulo.classList.add("new");
titulo.classList.remove("new"); //remove the class called new

//item
let value  = titulo.classList.item(1);//return name of the second class
document.write("Name of the second class: " + value);

document.write("<br>");

//contains: verify if exist a class
value = titulo.classList.contains("bigger"); //verify the class called bigger
document.write("Verify the class bigger: " + value);

//toggle: case if exist the class then remove and no exist add
titulo.classList.toggle("grande"); //this case add the class grande

//for no remove class in case if exist use true
titulo.classList.toggle("bigger", true); //no remove class

//replace
titulo.classList.replace("grande", "little"); //replace class grande for little
