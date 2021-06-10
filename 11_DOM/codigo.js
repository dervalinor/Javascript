/* DOM - Document Option Mode, document where is all the css, html and
 * javascript 
 * conection of javascript and HTML and CSS DOM - conection of javascript
  and HTML and CSS

  DOM
  -Definicion
  -Concepto extendido

  Nodo - Es calquier etiqueta del cuerpo, como parrafo, el mismo body o incluso  las etiquetas de una lista.

  Document: Es el nodo raiz, a partir del cual se deriva el resto de nodos
  Element: Nodos definidos por etiquetas html 
  Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text
  Attribute: Los atributos de las etiquetas definen nodos, es decir informacion de nodos.
  Comentarios y otros: Comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

DOM: este se compone por el documento HTML, donde HTML se divide ne Body y Head

HEAD -- tiene un titulo y Meta
BODY -- tiene las diferentes etiquetas y script

ES UN ARBOL COMO EN C++ DONDE CADA NODO TIENE SUBNODOS
Donde el nodo Document es el nodo raiz donde naces todos los demas nodos

Document - Metodos de seleccion de elementos

getElementById() - selecciona un elemento por su ID

getElementsByTagName() - selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica.

querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores

querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selector
*/ 

//Now we select a element for its ID


let parrafo = document.getElementById("parrafo");
document.write(parrafo);

document.write("<br>");

//selection according to type of element

parrafo = document.getElementsByTagName("p"); //selection all element p
document.write(parrafo);

document.write("<br>");

//return the first element of a group select 

parrafo = document.querySelector(".hola");//selection of a class hola
//return a only element
document.write(parrafo);

document.write("<br>");

//too we can select all the elements
parrafo = document.querySelectorAll(".hola");
document.write(parrafo);

document.write("<br>");

//of the list of elements we can select as a array with the position
document.write(parrafo[1]); //select second element 
