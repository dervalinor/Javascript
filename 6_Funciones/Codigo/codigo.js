//Funciones: bloque de codigo que se ejecuta al llamarla y dar parametros
//a esta
/*La estructura de la funcion es:
 
 function Nombre_de_funcion(parametros){
  codigo a ejecutar
 }
 
 */

//ejemplo: crear un funcion que muestre un mensaje en pantalla

function show(){
  document.write(("Hallo"));
}

show();

//otra forma de declarar variables es declararlas como variables
document.write("<br>");
document.write("<br>");

mensaje = function(){
  document.write("Ich liebe Linux");
}

document.write((mensaje));
document.write("<br>");
document.write("<br>");

//la return es retornar un valor para la cundo llamemos la funcion

document.write("Sumar dos numeros: ")
function sumar(a, b){
  c = parseInt(a) + parseInt(b);
  return c;//una cosa es lo que hace un funcion y otra es lo que retorna y finaliza la funcion, despues de return nada mas se ejecuta
}


a = prompt("a: ");
b = prompt("b: ");

document.write(sumar(a, b));//a y b son los parametros de la funcion

//los parametros de una funcion son datos que la funcion necesita para poder
//ejecutar las instrucciones 

//crear un programa para la multiplicacion de dos numeros sin usar el signo de
//multiplicacion

document.write("<br>");
document.write("<br>");

document.write("Programa para sumar dos numeros sin usar el signo de multiplicacion");
document.write("<br>");

function multiply(num1, num2){//cuando nosotros damos los parametros num1 y num2 nosotros declaramos alli estas variables
  let mult = 0, NUM1, NUM2;//las variables declaradas como parametros de la funcion solo se pueden utilizar solo dentro de la funcion.
  if(num1 > 0 && num2 > 0){
    for(let i = 0; i < num1; i++){
      mult = mult + num2;
    }
  } else if(num1 < 0 && num2 > 0){
    for(let i = 0; i < num2; i ++){//ya que contar cuantas veces se repite un numero con un numbero negativo no tiene sentido
      mult = mult + num1;  
    }
  } else if(num2 < 0 && num1 > 0){
    for(let i = 0; i < num1; i ++){//ya que contar cuantas veces se repite un numero con un numbero negativo no tiene sentido
      mult = mult + num2;  
    }
  } else if(num1 < 0 && num2 < 0){ //Contar las veces de repeticion no tiene sentido
    NUM1 = -num1;
    NUM2 = -num2;
    for(let i = 0; i < NUM1; i ++){
      mult = mult + NUM2;
    }
  }

  return mult; //importante no olvidar colocar el return
}

//Ahora nosotros llamamos la funcion y le damos los parametros

document.write("Resultado: " + multiply(-2, -3));//let para el alcance de las variables sea regional, mientras var el alcance es global

document.write("<br>");
document.write("<br>");

document.write("Funciones flecha <br>");

const hola = (name)=> {
  document.write(`Hallo ${name} und Guten Morgen`);
}

hola("Miguel");
