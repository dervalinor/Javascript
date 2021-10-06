/*
 Method of child

 - replaceChild()
 - removeChild()
 - hasChildNodes()

*/

const container = document.querySelector(".container");

//now we are going to element p and h2
const p_new = document.createElement("P");

p_new.innerHTML = "Simple text";

const h2_new = document.createElement("h2");

h2_new.innerHTML = "Simple title"; 

h2_old = document.querySelector(".h2");

//now we will replace h2_old for h2_new
container.replaceChild(h2_new, h2_old);

//Remove a element
p_old = document.querySelector(".parrafo");
container.removeChild(p_old);

//verify if have a element son
let answer = container.hasChildNodes(); //for object use const and variables uselet
if(answer){ //if answer is true
    document.write("Element has son"); //a text too is a node and count as son
 //a text too is a node and count as son} else {
    document.write("Element has not son");
}
