//maquina para dejar pasar a los mayores de edad a la fiesta
//y los que entren despues de la 2 AM no pagan

let age, hour;

age = prompt("Edad: ");
hour = prompt("Hora de entrada: ");

if(age > 18){
    document.write("Puede entrar a la fiesta");
} else {
    document.write("No puede entrar a la fiesta");
}

if(hour > 2){ //formato 24 horas
    document.write("No paga");
} else {
    document.write("Paga");
}
