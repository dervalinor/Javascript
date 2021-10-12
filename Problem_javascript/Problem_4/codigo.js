/*
Problema de programacion orientada a Objetos

Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse 
celular. De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la 
atencion 3 telefonos especificamente. El problema es que ningún vendedor sabe nada al
respecto entonces no pueden recomendarle absoluto nada ... pero claro: el antes de 
comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para 
poder comprarlos:

- crear un sistema para mostrarle a cofla la particularidades de los 3 celulares 
- cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara 
y memoria ram
- cada celular debe poder prender, reiniciar, tomar fotos y grabar

*/

class Phone {
    //attributes - characterist of phone
    constructor(mark, color, weight, resolution_screen, resolution_camera, ram){
        this.mark = mark;
        this.color = color;
        this.weight = weight;
        this.resolution_screen = resolution_screen;
        this.resolution_camera = resolution_camera;
        this.ram = ram;
    }

    //Method of phone
    static power_on(){
        console.log(`The phone is powering on`);
    }

    static power_off(){
        console.log(`The phone is powering off`);
    }

    static reboot(){
        console.log(`The phone is reboot`);
    }
    
    static take_photo(){
        console.log(`The phone is taking photo`);
    }

    static take_video(){
        console.log(`The phone is taking video`);
    }

    see_info(){
        console.log(`The phone is mark ${this.mark}, color ${this.color}, 
        weight ${this.weight}, resolution screen ${this.resolution_screen},
        resolution camera ${this.resolution_camera} and memory ram ${this.resolution_camera}`);
    }
}

//create a class for height gamma where this have slow take video and recognize facial
//use setters for change attribute of video and security of phone
class Height_gamma extends Phone {
    constructor(mark, color, weight, resolution_screen, resolution_screen, ram, speed_video, security_phone){
        super(mark, color, weight, resolution_screen, resolution_camera, ram);
        this.speed_video = speed_video;
        this.security_phone = security_phone;
    }

    set new_thing(vel_video, sec_phone){
        this.speed_video = vel_video;
        this.security_phone = sec_phone;
    } 
}
