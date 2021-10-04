/*creation of elements
 
- createElements()
- createTextNode()
- appendChild()
- createDocumentFragment()

*/

//we will create a list 
//first we select element
const container = document.querySelector(".container");
//Now we can create element
const item = document.createElement("LI");

//if we want li contain inside text then:
const texto_item = document.createTextNode("This element of the list");

//show type of elememt
console.log(item);
console.log(texto_item);

//use of child - elements inside of element
//this case the childs are elements inside of li
item.appendChild(texto_item);

//other way of modify a element
//item.innerHTML = "Other element of li";

console.log(item);

//we can add a child a the div
container.appendChild(item);

//for this case of create much element use createDocumentFragment()
const fragment = document.createDocumentFragment();

for(let i = 0; i < 20; i++){
    const item2 = document.createElement("LI");
    item2.innerHTML = "New element of li";
    fragment.appendChild(item2);
}

//show all the elements
container.appendChild(fragment);
