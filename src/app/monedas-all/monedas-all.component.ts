import { Component } from '@angular/core';
import {DatosApiService} from '../datos-api.service'
import{UserAuthService} from '../user-auth.service'
import { doc,Firestore, collectionData, collection, query, where, addDoc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-monedas-all',
  templateUrl: './monedas-all.component.html',
  styleUrls: ['./monedas-all.component.css']
})
export class MonedasAllComponent {
  page = 1;
  pageSize = 6;
  listaMonedas = new Array<any>();
  filtrado = "";
  constructor(public datosAPI:DatosApiService, public firestore:Firestore, public Usuario:UserAuthService){
    // this.nuevoDato.emit(datosAPI.listaMonedas);
    // this.listaMonedas = this.datosAPI.listaMonedas
    // console.log(this.datosAPI.listaMonedas);
    // const datos = collection(firestore, 'monedas');
    // this.datosDeBD = collectionData(datos);
    // this.datosDeBD = collectionData(query(datos, where("usuarioID", "==", "pepe@gmail.com")));
  }

  // filtrarMonedas(){
  //   this.datosAPI.listaMonedas.filter(moneda => moneda.name == this.filtrado );
  //   console.log(this.datosAPI.listaMonedas);
  //   console.log(this.filtrado)
  //   console.log(this.datosAPI.listaMonedas.filter(moneda => moneda.name == this.filtrado ))
  // }

  anadirFavoritos(coinId:any, imageId:string){
    console.log(coinId);
    console.log(this.Usuario.estaLogueado);
    console.log(this.Usuario.emailUser)
    if(this.Usuario.estaLogueado){
      setDoc(doc(this.firestore, "monedas", coinId+this.Usuario.userId), {
        monedaID: coinId,
        usuarioID: this.Usuario.userId,
        imagen: imageId
      });
    }
  }
}
