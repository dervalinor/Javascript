main();

function main(){

  let asistencia_diaria = [];
  let ausencia_diaria = [];
  let asistencia_final = [];
  let ausencia_final = [];
  let n;
  let opt, preg;

  document.write("Registro de asistencia");
  document.write("<br>");
  n = prompt("Elige una opcion: ");
  alert("1. Registro diario de asistencia");
  alert("2. Registro del mes <br>");
  
  if(opt == 1){
    for(let i = 0; i < n; i ++){
      preg = prompt(`asistencia del alumno ${i + 1}: `);
      if(preg == "si" || preg == "Si" || preg == "sI"){
        asistencia_diaria[i] = preg;
      } else if(preg == "No" || preg == "no" || preg == "nO"){
        ausencia_diaria[i] = preg;
      }
    }
  }

  else if(opt == 2){
    for(let i = 0; i < n; i ++){
      asistencia_final[i] = prompt(`Asistencia del alumno ${i + 1}: `);
    }
  }

  return "<br>";
}
