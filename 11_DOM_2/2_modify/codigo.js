//Now we will modify the file html with javascript 
/* 

todos los elementos html tiene estos atributos

1- contentEditable - indica si el elemento puede modificar por el usuario (bool)
2- dir - indica la direccionalidad del texto 
3- hidden - indica si el elemento aun no es, o ya no es, relevante
4- id - define un identificador unico 
5- style - contiene declaraciones de estilo css para se aplicadas a un elemento
6- tabindex - indica si el elemento puede obtener 
7- title - contiene un texto con informacion relacionada al elemento al que
pertenece
8-  

*/

//contentEditable - let editable all content of the element
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", "true");

//dir - indicate the direction of text as left-right or right-left
const titulo2 = document.querySelector(".titulo2");
titulo2.setAttribute("dir", "rtl"); //rtl - right to left

//hidden - hidden the element
const titulo3 = document.querySelector(".titulo3");
titulo3.setAttribute("hidden", "true");

//we can remove a attribute
titulo3.removeAttribute("hidden", "true");

//tabindex - we can select or no to the element
const titulo4 = document.querySelector(".titulo4");
titulo4.setAttribute("tabindex", "3"); //give parameter in numbers, this number 
//mean the order of selection

//we can modify the property title
const titulo5 = document.querySelector(".titulo5");
titulo5.setAttribute("title", "Open up, FBI");
