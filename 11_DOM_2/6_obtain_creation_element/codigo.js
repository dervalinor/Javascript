/* Obtencio y modificacion de elementos
- textContent: devuelve el texto de cualquier nodo
- innerText: devuelve el texto visible de un nodo element
- outerText: devuelve el texto de la etiqueta html incluidas las demas etiquetas
- innerHTML: devuelve el contenido html de un elemento 
- outerHTML: devuelve el codigo html completo del elemento

 */

//textContent
let titulo = document.querySelector(".titulo");
let result = titulo.textContent;
document.write(result);

//innerText
let parrafo = document.querySelector(".parrafo");
result = parrafo.innerText; //return only the content of element
document.write(result);
