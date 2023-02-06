import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosApiService} from '../datos-api.service'
import { Firestore, collectionData, collection, query, where, addDoc, setDoc, deleteDoc , doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import{UserAuthService} from '../user-auth.service'
import { TitleStrategy } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-private-favourites',
  templateUrl: './private-favourites.component.html',
  styleUrls: ['./private-favourites.component.css']
})
  
export class PrivateFavouritesComponent {
  monedaDetalle = new Array<any>();

  // intervalo = setInterval(() => {
  //   this.getDatosOfEachCrypto();
  //   // Voy a hacer que se actualice cada 5 minutos para evitar que la API me bloquee
  //   console.log("Actualizando datos de las criptomonedas");
  // }, 900000);
  
  // usuarioId = "";
  // datosBD = new Array<any>();
  constructor(public datosAPI:DatosApiService, public firestore:Firestore, public Usuario:UserAuthService){
    // this.traerDatosUsuarioMonedas();
    // this.monedaDetalle = this.Usuario.datosUsuarioMonedas;
    // console.log(this.monedaDetalle);
  }  

  ngOnInit(){
    this.Usuario.datosTodaInformacion = this.monedaDetalle;
  }
    
  obtenerDetalle(id:string){
    this.datosAPI.obtenerDatosFavoritos(id);
  }

  eliminarFavoritos(monId:any, index:any){
    this.monedaDetalle.splice(index, 1)

    this.Usuario.userId
    const docRef = doc(this.firestore, "monedas", monId+this.Usuario.userId);
      deleteDoc(docRef)
      .then(() => {
          console.log("Entire Document has been deleted successfully.")
      })
      .catch(error => {
          console.log(error);
      })
  }

//   getDatosOfEachCrypto(){
    
//     this.Usuario.datosUsuarioMonedas.forEach((element) => {
//       // for(let i = 0; i < element.length; i++){
//         for (let i in element){
//         this.datosAPI.obtenerDatosFavoritos(element[i].monedaID).subscribe((data:any) => {
//             console.log(data);
//           if(this.monedaDetalle.find((crypto:any) => crypto.id == data.id))
//             return;
//           this.monedaDetalle.push(data);
//         })
//       }
//     });
//   }
  
}
