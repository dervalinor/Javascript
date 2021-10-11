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

const perro = new animal("Criollo", 5, "negro");

console.log("Perro: " + perro.info);//console.log es para solo mostrar el resultado solo en la consola del navegador 
perro.SeeInfo(); //acede al metodo SeeInfo de la clase animal
//TAMBIEN CON CONSOLE.LOG PODEMOS EJECUTAR EL CODIGO CON node codigo.js EN LA
//TERMINAL DE LINUX O MAC

console.log(" ");

/*
Caracteristicas de POO

- Abstraccion - reducir un objeto a sus propiedades mas basicas

- Modularidad - resolver un problema grande separandolo por partes, por
pedacitos

- Encapsulamiento - hacer que todos los datos o atributos del objeto esten 
privados, es decir que el usuario no pueda acceder a esos datos

- Polimorfismo - ver como un objeto se comporta de forma distinta ante
un mismo metodo, debido a sus propiedades

Otros conceptos

- Herencia (extends) 
- Metodos estaticos 
- Metodos accesores (Getter, setters)

En Javascript todo es un objeto*/

class Person {
    constructor(name, age, state_working){//Abstraccion
        this.name = name;//encapsulamiento - solo accesible por los metodos
        this.age = age;
        this.state_working = state_working;
        this.infomation = `My name is ${this.name} and age ${this.age}
        and state working is ${this.state_working}`;
    }
    
    view_info(){
       console.log(this.infomation); 
    }
    //Ejemplo de polimorfismo
    working(){
        if(this.state_working == "Student"){
            console.log("This person can't working");
        } else {
            console.log("This person can working");
        }
    }
}

//all object is variable const
const student = new Person("Jhon", 23, "Student");
const engineer = new Person("Sofia", 25, "Engineer");

student.working();
engineer.working();

console.log(" ");

//concepto de herencia - donde una clase hereda atributos y metodos de 
//otra clase

class Engineer extends Person {//heredara la propiedades y metodos de Person
    constructor(name, age, state_working, type, program){
        super(name, age, state_working);//heredar las caracteristicas de la 
        //clase Person 
        this.type = type; //nuevo atributo
        this.program = program;
    }
    program_engineer(){
        if(this.program == "yes"){
            console.log(`Engineer ${this.name} is programer in c++`);
        } else {
            console.log(`Engineer ${this.name} isn't programer in c++`);
        }
    }
}

const programer = new Engineer("Sofia", 25, "Engineer", "Computed", "yes");
programer.program_engineer();

//NO PODEMOS TENER UN OBJETO CON LAS MISMO NOMBRE QUE LA CLASE
