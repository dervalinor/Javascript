/*
Metodos para definir, obtener y eliminar valores de atributos
- setAttribute() - Modifica el valor de una atributo
- getAttribute() - Obtiene el valor de un atributo 
- removeAttribute() - Remueve el valor de un atributo
 * /

/*first select the element */

const rango = document.querySelector(".rango"); //selection of the class rango
//now we will modify the value of the element 
rango.setAttribute("type", "text"); //the first parameter is the value to modify
//and second parameter is the new value
/*for this case modify the value input of range to text */

//see the value of the attribute

document.write("<br>");
document.write("<br>");

Value_attribute = rango.getAttribute("type");
document.write("Value of attribute: " + Value_attribute);

//Now we going to remove a attribute

const remover = document.querySelector(".remover");
//value_remove = document.removeAttribute("type");

//now we going to modify a title

const titulo = document.querySelector(".titulo");

//contentEditable: Editar el contenido
titulo.setAttribute("contentEditable", "true");
