import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatosApiService} from '../datos-api.service'
import { doc,Firestore, collectionData, collection, query, where, addDoc, setDoc } from '@angular/fire/firestore';
import{UserAuthService} from '../user-auth.service'

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  page = 1;
  pageSize = 5;
  // favoritos = new Array<any>();
  favoritos:any;
  content:any;
  other_content:any;
  name = "";
  idDetalle = "";
  categories = "";
  description = "";
  image="";
  datosTraidos = new Array;
  datosID = new Array;
  // @Output() nuevoDato = new EventEmitter<any>();
  // datosDeBD: Observable<any[]>;
  constructor(public datosAPI:DatosApiService, public firestore:Firestore, public Usuario:UserAuthService){
    // this.nuevoDato.emit(datosAPI.listaMonedas);

    // const datos = collection(firestore, 'monedas');
    // this.datosDeBD = collectionData(datos);
    // this.datosDeBD = collectionData(query(datos, where("usuarioID", "==", "pepe@gmail.com")));
  }
  // nuevoDato(){
  //   addDoc(collection(this.firestore, "monedas"), {
  //     nombre: "david",
  //     usuario: "david"
  //   });
  // }
  cerrarSesion(){
    this.Usuario.cerrarSesion();
  }
  ola(){
    this.Usuario.traerDatosUsuarioMonedas();
  }
  anadirFavoritos(coinId:any, imageId:string){
    console.log(coinId);
    console.log(this.Usuario.estaLogueado);
    console.log(this.Usuario.emailUser)
    if(this.Usuario.estaLogueado){

      // addDoc(collection(this.firestore, "monedas"), {
      //   monedaID: coinId,
      //   usuarioID: this.Usuario.emailUser
      // });


      setDoc(doc(this.firestore, "monedas", coinId+this.Usuario.userId), {
        monedaID: coinId,
        usuarioID: this.Usuario.userId,
        imagen: imageId
      });
    }
  }
  // peticionDetalle(id:any){
  //   this.idDetalle = id;
  //   console.log(this.idDetalle);
  //   this.http.get('https://api.coingecko.com/api/v3/coins/'+this.idDetalle).subscribe(
  //     (datosPlus:any)=>{
  //       this.datosID = datosPlus;
  //       console.log(this.datosID);
  //       // this.name = datos.name;
  //       // this.image = datos.image.small;
  //       // this.id = datos.id;
  //       // this.categories = datos.categories;
  //       // this.description = datos.description.en;
  //     }
  //   )
  // }
  // lanzaPeticionAJAX(){
  //   this.http.get('https://api.coingecko.com/api/v3/coins').subscribe(
  //     (datos:any)=>{
  //       this.datosTraidos = datos
  //       // this.name = datos.name;
  //       // this.image = datos.image.small;
  //       // this.id = datos.id;
  //       // this.categories = datos.categories;
  //       // this.description = datos.description.en;
  //       this.nuevoDato.emit(this.datosTraidos);
  //     }

      
    // )
  }

// }
