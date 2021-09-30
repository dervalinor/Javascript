/*Concatenacion: unir string

1. con el signo + 
2. para numeros forzados string ("" + 9 + 4) 
3. con Concat
4. con bactiks y la variable entre ${}

*/

saludo = "Hallo Miguel, ";
pregunta = "Wie sind Sie?";

//concatenacion con +
frase = saludo + pregunta;

document.write("Concatenacion con + : " + frase + " | ");

//forzar un string 

cadena1 = 3;
cadena2 = 4;

cadena3 = "" + cadena1 + cadena2; //entonces de esta forma nosotros podemos colocar los numeros como cadena de texto y no sumarlos
document.write("   ")
document.write("    Forzar a string: " + cadena3 + " | ");

//Concat

string1 = "Numero ";
string2 = 3.14;

string3 = string1.concat(string2);

document.write("Concat: " + string3 + " | ");

//backtiks

name = "Miguel";

saludo1 = `Hello ${name} and let's go programming`; //para obtener alt + } = ``

document.write(saludo1);

//sin backtiks si queremos colocar comilla a una palabra dentro de un string

name2 = 'Hola a todo mis "amigos", los quiero';

document.write("  |  " + name2);
