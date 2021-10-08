/*

Nodos

- closest()

*/

//ahora vamos hacer que nos diga el elemento ascendente con la clase div
const div = document.querySelector(".div");
console.log(div.closest(".div")); //return element with the class div
//busca al contenedor mas cercano que contenga a ese elemento (en este
//caso el elemento con la clase div-2)
