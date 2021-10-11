/*

Metodos estiticos (static)
Metodos accesores (Getters, setters)

*/

class Phone {
    constructor(mark, memory, ram){
        this.mark = mark;
        this.memory = memory;
        this.ram = ram;
    }

    //static method
    static alarm(){
        console.log("5: 00 am Guten Morgen Miguel");
    }

    switch_on(){
        console.log("Phone is switching on")
    }

    power_off(){
        console.log("Phone is power off");
    }
}
