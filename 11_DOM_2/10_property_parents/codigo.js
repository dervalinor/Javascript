/*

Property of parents

- parentElement: search a element html father
- parentNode: search a node father

*/

//now we will question which father for h2
const h2_old = document.querySelector(".h2");
console.log(h2_old.parentElement);

//parentNode is similar to parentElement
const container = document.querySelector(".container");
console.log(container.parentNode);
