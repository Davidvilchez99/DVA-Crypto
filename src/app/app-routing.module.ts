import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MonedaDetalleComponent } from './moneda-detalle/moneda-detalle.component';
import { PrivateFavouritesComponent } from './private-favourites/private-favourites.component';
import { MonedasAllComponent } from './monedas-all/monedas-all.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'cabecera',
    component: CabeceraComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'privateFovourites',
    component: PrivateFavouritesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'monedaDetalle/:id',
    component: MonedaDetalleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'monedasAll',
    component: MonedasAllComponent,
  },
  {
    path: 'login-register',
    component: RegisterComponent,
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
