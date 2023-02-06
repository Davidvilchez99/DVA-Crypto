import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosApiService {
  public listaMonedas = new Array<any>();
  public monedaDetalle = new Array<any>();


  constructor(private http: HttpClient) {
    this.obtenerDatos();
  }


  obtenerDatos() {
    this.http.get('https://api.coingecko.com/api/v3/coins/').subscribe(
      (datos: any) => {
        this.listaMonedas = datos;
      }
    )
  }

  obtenerDatosFavoritos(id: any) {

    return this.http.get('https://api.coingecko.com/api/v3/coins/' + id);
  }

  obtenerGrafico(id: any) {
    return this.http.get('https://api.coingecko.com/api/v3/coins/' + id + '/market_chart?vs_currency=eur&days=max');
  }
}
