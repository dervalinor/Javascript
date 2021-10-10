//En la programacion orientada a objetos tenemos los conceptos:
//1- Clase: sirve para crear objetos donde en una clase se le da a se crean los
//atributos y metodos para los objetos que se crearan a partir de esta clase es
//como una fabrica de objetos con determinadas caracteristica y usos

//2- Objetos: los objetos son resultado de estas clases  
//3- Atributos: son las caracteristica del objeto 
//4- Metodos: cosas que puede hacer el objeto 
//5- Constructor: funcion que nos va construir las propiedades de un objeto 
//6- instanciacion: cuando creamos un clase en us totalidad decimos que esta
//instanciada

//Ejemplo: crear un clase llamada animal donde esta tenga los atributos
//especie, edad y color y con metodos como comer, correr y dormir

class animal{
  constructor(especie, edad, color){
    this.especie = especie;//this hace referencia al objetos que se va a crear
    this.edad = edad;
    this.color = color;
    this.info = `Perro de raza ${this.especie}, edad ${this.edad} y color ${this.color}` 
    //esta forma mostramos informacion de la clase animal
  }
  //Metodos son las acciones que se realizaran y es una funcion
  //crear metodo que nos permita ver informacion de la clase animal
  SeeInfo(){
    console.log("Información del animal: " + this.info);
  }
  
}

//Ahora creamos un objetos llamado perro al cual es un animal por lo cual
//pertenece a la clase animal y le vamos a dar sus atributos

let perro = new animal("Criollo", 5, "negro");

console.log("Perro: " + perro.info);//console.log es para solo mostrar el resultado solo en la consola del navegador 
perro.SeeInfo(); //acede al metodo SeeInfo de la clase animal
//TAMBIEN CON CONSOLE.LOG PODEMOS EJECUTAR EL CODIGO CON node codigo.js EN LA
//TERMINAL DE LINUX O MAC

/*
Caracteristicas de POO

- Abstraccion
- Modularidad
- Jerarquia

Otros conceptos

- Polimorfismo
- Herencia

- Encapsulamiento
- Metodos accesores (Getter, setters)

*/
