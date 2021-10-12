/* 

Cofla want download three apps for phone

- create a system for choose a apps to download
- give to information of the apps as quantity of download, punctuation and weight
- The user must can install, open, close and desinstall the app 

*/ 

class App {
    constructor(a, b, c, d){
        this.name_app = a;
        this.quantity_download = b; //value can be someone
        this.punctuation = c;
        this.weight = d;
    }

    show_app(){
        console.log(`App called ${this.name_app}, quantity of downloads ${this.quantity_download}, punctuation ${this.punctuation} and weight ${this.weight}`);
    }

    install(){
        console.log(`Installing app ${this.name_app}`);
    }

    open(){
        console.log(`Opening app ${this.name_app}`);
    }
    
    desinstall(){
        console.log(`Desinstalling app ${this.name_app}`);
    }
}

const Grasshoper = new App("Grasshoper", "10M", 4.7, "30MB");
Grasshoper.show_app();
