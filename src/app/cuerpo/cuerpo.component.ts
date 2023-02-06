import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  @Input() listaDatos= new Array;

  idDetalle = "";
  datosID = new Array;
  constructor(private http:HttpClient){

  }

  peticionDetalle(id:any){
    this.idDetalle = id;
    console.log(this.idDetalle);
    this.http.get('https://api.coingecko.com/api/v3/coins/'+this.idDetalle).subscribe(
      (datosPlus:any)=>{
        this.datosID = datosPlus;
        console.log(this.datosID);
        // this.name = datos.name;
        // this.image = datos.image.small;
        // this.id = datos.id;
        // this.categories = datos.categories;
        // this.description = datos.description.en;
      }
    )
  }
}
