import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crypto';
  datosTraidos = new Array<any>();;

  capturaEvento(dato:any){
    this.datosTraidos = dato;

    // this.listaDatos.push(dato);
  }
}
