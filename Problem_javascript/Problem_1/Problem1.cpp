#include <iostream>

using namespace std;

void ask();
void heladeria(double dinero[], double precios[], int, int);

int main(){

  ask();
  return 0;
}

void ask(){ 

  int n, m;
  double dinero[100], precios[100];

  cout << "Un numero n de clientes quieren compar el helado mas caro que pueden compar con su dinero y saber el vuelto" << endl;
  cout << "\nNumero de clientes: "; cin >> n;

  cout << "\nDinero de los clientes: " << endl;
  cout << "\n";
  for(int i = 0; i < n; i++){
    cout << "\nCliente " << i << ": "; cin >> dinero[i];
  }

  cout << "\nNumero de tipo de helados: "; cin >> m;
  cout << "\n";
  for(int i = 0; i < m; i++ ){
    cout << "Helado tipo: " << i << ": "; cin >> precios[i];
  }

  heladeria(dinero, precios, n, m);

}

void heladeria(double dinero[], double precios[], int n, int m){ 

  double Precio_max = 0;
  
  cout << "\nPrecio del helado mas caro: " << endl;

  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      //la diferencia de dinero y precio debe se la menor posible
      if(precios[j] <= dinero[i]  and Precio_max <  precios[j]){ //estos valores menores o iguales al dinero del cliente sacar el valor mayor    
        Precio_max = precios[j];
      }
    }
    cout << "Cliente "<< i  <<": " << Precio_max <<"  Vuelto: " << dinero[i] - Precio_max << endl;
  }
}
