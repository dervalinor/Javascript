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
