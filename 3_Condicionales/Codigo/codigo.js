//condicionales: validar algo
//if para el caso que se cumpla la condicion
//else para el caso contrario

let validacion;

validacion = prompt("Sind Sie Programmierer: ");

if(validacion == "ja" || validacion == "Ja" || validacion == "JA" || validacion == "jA"){
  alert("Hallo Programmierer");
} else if(validacion == "Nein" || validacion == "nein" || validacion == "NEIN"){//else if para en caso de no cumpirse la condicion principal
  //si cumple otra condicion 
  alert("Hallo User");
} else { //else para el caso que no se cumpla ninguna condicion 
  alert("Opcion no valida");
}
