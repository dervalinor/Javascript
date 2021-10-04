/* Obtencio y modificacion de elementos
- textContent: devuelve el texto de cualquier nodo
- innerText: devuelve el texto visible de un nodo element
- outerText: devuelve el texto de la etiqueta html incluidas las demas etiquetas
- innerHTML: devuelve el contenido html de un elemento 
- outerHTML: devuelve el codigo html completo del elemento

 */

//textContent show all the text
let titulo = document.querySelector(".titulo");
let result = titulo.textContent;
document.write(result);

document.write("<br>");

//innerText similar to textContent
let parrafo = document.querySelector(".parrafo");
result = parrafo.innerText; //return only the content of element
document.write(result);

document.write("<br>");

//textContent show the hidden text
let titulo2 = document.querySelector(".titulo2");
let result1 = titulo2.textContent;
document.write(result1);

//innerHTML show the code html but for alert
let result2 = parrafo.innerHTML;
alert(result2);

//outerHTML show all the code html but for alert
result2 = parrafo.outerHTML;
alert(result2);
