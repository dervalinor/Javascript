/*
 Atributos de inputs
 1. className
 2. value
 3. type
 4. accept
 5. form
 6. minlength
 7. placeholder
 8. required

*/

const input = document.querySelector(".input-normal");
//now we will access to the attributes from javascript
document.write(input.className); //show the name of the class
document.write("<br>");
document.write(input.value);//show the content inside of the input
document.write("<br>");
//change the type of input
const input2 = document.querySelector(".input-normal2");
document.write(input2.type = "range"); //change input of text to range
