/*

Property of siblings

- nextSibling
- previousSibling
- nextElementSibling
- previousElementSibling

*/

//los elementos hermanos son los que estan al lado del element seleccionado
//son elementos que estan en el mismo rango o nivel

const h2 = document.querySelector(".h2");
const parrafo = document.querySelector(".parrafo");

//nextSibling - show the next sibling but only text
console.log(h2.nextSibling);
console.log(h2.previousSibling); //show only text no element

//show element sibling no text next and previous
console.log(parrafo.nextElementSibling);
console.log(parrafo.previousElementSibling);
