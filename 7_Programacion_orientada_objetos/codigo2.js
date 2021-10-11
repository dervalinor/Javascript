/*

Metodos estiticos (static)
Metodos accesores (Getters, setters)

*/

class Phone {
    constructor(mark, memory, ram){
        this.mark = mark;
        this.memory = memory;
        this.ram = null; //ram is null for after modify with setters
    }


    //static method - it isn't need create to object

    static switch_on(){//is static method because don't use the attributes of the class
        console.log("Phone is switching on")
    }

    static power_off(){
        console.log("Phone is power off");
    }

    //this method isn't static because use the attributes of the class
    see_phone(){
        console.log(`Phone of mark ${this.mark}, storage memory ${this.memory}
        and RAM memory ${this.ram}`);
    }
    //Method getters - for obtain a value
    //Method setters - for modify a value
    set modify_ram(new_ram){ //setters modify the value of attribute
        this.ram = new_ram;
    }

    get see_mark(){
        return this.mark;
    }
}

//static method is only necesary put the name of the class
Phone.switch_on();

//Now with setters we can modify a attribute
const moto_g = new Phone("Moto_g", "300GB", "4GB")
moto_g.modify_ram = "8GB";
console.log("New ram: " + moto_g.ram);

//Getters we can see information of a attribute
console.log("Mark of phone: " + moto_g.see_mark);
