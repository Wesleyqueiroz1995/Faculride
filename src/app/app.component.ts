import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet, provideRouter, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProcurarComponent } from './procurar/procurar.component';
import {  OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';



// Definindo as rotas corretamente
const routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'procurar', component: ProcurarComponent },  // Nova rota para o ProcurarComponent
  ];






@Component({
  selector: 'app-root',
  standalone: true,  // Marca o componente como standalone
  imports: [ HeaderComponent,FooterComponent,RouterOutlet,RouterModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usuarios: any[] = []; // Definindo um array para armazenar os dados dos usuários

  constructor(private usuariosService: UsuariosService) {} // Injetando o serviço

  // Método para buscar os usuários ao inicializar o componente
  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((data) => {
      this.usuarios = data; // Atribuindo os dados recebidos ao array usuarios
    });
  }
}

