//sentencia label donde nosotros podemos relacionar un bucle con un nombre
//de un nombre

document.write("<br>");
document.write("<br>");

let arreglo1 = ["fisica", "quimica", "matematicas"];
let arreglo2 = ["analitica", "mecanica", arreglo1, "cuantica"];

arreglo12:
for(let arreglo in arreglo2){
  if(arreglo == 2){//ya que en la posicion 2 esta un array y la forma para mostarlo es por medio de un ciclo
    for(let arreglo of arreglo1){
      document.write(arreglo + " ");
      break arreglo12; //con esto detenemos el for llamado arreglo12 
    } 
  }
  else {
    document.write(arreglo2[arreglo] + " ");
  }
}
