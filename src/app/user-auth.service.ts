import { Injectable } from '@angular/core';
import {DatosApiService} from './datos-api.service'
import { HttpClient } from '@angular/common/http';
import { doc,Firestore, collectionData, collection, query, where, addDoc, setDoc } from '@angular/fire/firestore';

import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth: Auth,public  firestore:Firestore, public datosAPI:DatosApiService,private http:HttpClient) {
    this.auth = getAuth();

    this.comprobarSiEstaLogueado(getAuth());
    // provider.addScope('repo');
    // provider.setCustomParameters({
    //   'allow_signup': 'false'
    // });
  }
  
  intervalo = setInterval(() => {
    this.traerDatosUsuarioMonedas();
    console.log("Actualizadas");
  }, 200000);
  
  estaLogueado = false;

  emailUser = "";
  userId = "";
  datosUsuarioMonedas=  new Array<any>();
  datosTodaInformacion=  new Array<any>();
  credential: any;
  token: any;

  gitHubAuth(){
    signInWithPopup(this.auth, new GithubAuthProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    this.credential = GithubAuthProvider.credentialFromResult(result);
    this.token = this.credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }


   crearUsuario(usuario:string, contraseña: string){
    createUserWithEmailAndPassword(this.auth, usuario, contraseña)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  cerrarSesion(){
    signOut(this.auth).then(() => {
    // Sign-out successful.
    console.log("sesion cerrada");
    this.estaLogueado=false;
    console.log(this.estaLogueado);
    }).catch((error) => {
    // An error happened.
    });
  }

  altaUsuario(usuario2:string, contraseña2: string){
    // createUserWithEmailAndPassword(auth, usuario.value, contraseña.value)
    signInWithEmailAndPassword(this.auth, usuario2, contraseña2)
    // signInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredential) => {
        // Signed in 
        this.emailUser = usuario2;
        this.estaLogueado = true;
        console.log(this.estaLogueado);
        const user = userCredential.user;
        this.traerDatosUsuarioMonedas();

    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
    });
}

registrarseConGoogle(){
  signInWithPopup(this.auth, new GoogleAuthProvider())
  .then((userCredential) => {
    this.traerDatosUsuarioMonedas();
    // Signed in 
    const user = userCredential.user;
    // this.emailUser = userCredential.user.email;
    this.estaLogueado = true;
    // ...
})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
});

}



  comprobarSiEstaLogueado(auth:any){
    onAuthStateChanged(auth, (user:any) => {
      if (user) {
      this.userId = user.uid;
      this.emailUser= user.email;
      this.estaLogueado = true;
        this.traerDatosUsuarioMonedas();
      }
      else {
       this.estaLogueado = false;
      }
    });
  }
  
  traerDatosUsuarioMonedas(){
    
    const datos = collection(this.firestore, 'monedas');
    collectionData(query(datos, where("usuarioID", "==", this.userId))).subscribe((datos:any)=>{
      this.datosUsuarioMonedas = datos;

    for (let element of datos){
      this.http.get('https://api.coingecko.com/api/v3/coins/'+element.monedaID).subscribe((datos:any) =>{
        if(this.datosTodaInformacion.find((moneda:any) => moneda.id == datos.id))
            return;
          this.datosTodaInformacion.push(datos);
      });

    }
    });
  }



}
