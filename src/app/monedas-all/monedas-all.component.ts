import { Component } from '@angular/core';
import { DatosApiService } from '../datos-api.service'
import { UserAuthService } from '../user-auth.service'
import { doc, Firestore, collectionData, collection, query, where, addDoc, setDoc } from '@angular/fire/firestore';

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
  constructor(public datosAPI: DatosApiService, public firestore: Firestore, public Usuario: UserAuthService) {
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
