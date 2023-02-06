import { Component } from '@angular/core';
import{UserAuthService} from '../user-auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username="";
    password="";
    // username2="";
    // password2="";
    constructor(public Usuario: UserAuthService ) {
      // this.Usuario.estaLogueadoMethod();
    }
    crearUsuario(){
      this.Usuario.crearUsuario(this.username, this.password);
    }
    // altaUsuario(){
    //   this.Usuario.altaUsuario(this.username2, this.password2);
    // }
    // cerrarSesion(){
    //   this.Usuario.cerrarSesion();
    // }

    
}
