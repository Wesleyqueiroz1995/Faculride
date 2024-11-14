
import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcurarComponent } from './procurar/procurar.component';
import { CaronaComponent } from './carona/carona.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { DevsComponent } from './devs/devs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // Redireciona para 'home' ao acessar a raiz
  { path: 'home', component: HomeComponent }, //home
   {path: 'carona', component:CaronaComponent},  // Carona
   {path:'cadastro', component:CadastroComponent}, //cadastro
   {path: 'procurar',component:ProcurarComponent}, //procurar
   {path:'login',component:LoginComponent}, //login
   {path: 'devs',component:DevsComponent}// desenvovedores

];
