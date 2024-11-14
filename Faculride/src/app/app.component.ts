import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet, provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProcurarComponent } from './procurar/procurar.component';
import { CaronaComponent } from './carona/carona.component';

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
export class AppComponent {
  title = 'Faculride';
}


