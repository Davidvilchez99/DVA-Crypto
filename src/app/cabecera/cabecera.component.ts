import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosApiService } from '../datos-api.service'
import { doc, Firestore, collectionData, collection, query, where, addDoc, setDoc } from '@angular/fire/firestore';
import { UserAuthService } from '../user-auth.service'

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  page = 1;
  pageSize = 5;
  // favoritos = new Array<any>();
  favoritos: any;
  content: any;
  other_content: any;
  name = "";
  idDetalle = "";
  categories = "";
  description = "";
  image = "";
  datosTraidos = new Array;
  datosID = new Array;

  constructor(public datosAPI: DatosApiService, public firestore: Firestore, public Usuario: UserAuthService) {

  }

  cerrarSesion() {
    this.Usuario.cerrarSesion();
  }
  ola() {
    this.Usuario.traerDatosUsuarioMonedas();
  }
  anadirFavoritos(coinId: any, imageId: string) {
    console.log(coinId);
    console.log(this.Usuario.estaLogueado);
    console.log(this.Usuario.emailUser)
    if (this.Usuario.estaLogueado) {
      setDoc(doc(this.firestore, "monedas", coinId + this.Usuario.userId), {
        monedaID: coinId,
        usuarioID: this.Usuario.userId,
        imagen: imageId
      });
    }
  }
}

