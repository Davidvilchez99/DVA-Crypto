import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  password = "";
  constructor(public Usuario: UserAuthService) {
  }
  crearUsuario() {
    this.Usuario.crearUsuario(this.username, this.password);
  }
}
