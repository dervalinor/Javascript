/*

obtain and modify of childs

- firstChild
- lastChild
- firstElementChild
- lastElementChild
- childNodes
- children

*/

const container = document.querySelector(".container");

//firstChild - obtain the first child include space in white
const first_child = container.firstChild;
console.log(first_child);

//lastChild - obtain the last child include space in white
const last_child = container.lastChild;
console.log(last_child);

//firstElementChild - obtain first element without include space in white
const First_child = container.firstElementChild;
console.log(First_child);

//lastElementChild - similar to firstElementChild but with last element
const Last_child = container.lastElementChild;
console.log(Last_child);

//childNodes - return all the node child 
const child = container.childNodes;
console.log(child);
