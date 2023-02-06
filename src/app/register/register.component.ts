import { Component } from '@angular/core';
import{UserAuthService} from '../user-auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username="";
  password="";

  constructor(public Usuario: UserAuthService ) {
    // this.Usuario.estaLogueadoMethod();
  }
  altaUsuario(){
    this.Usuario.altaUsuario(this.username, this.password);
  }

  registrarseConGoogle(){
    this.Usuario.registrarseConGoogle();
  }

  registrarConGitHub(){
    this.Usuario.gitHubAuth();
  }
}
