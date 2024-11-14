import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';  // Importando provideRouter e Routes corretamente
import { appConfig } from './app/app.config';  // Arquivo de configuração (se existir)
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { Router } from '@angular/router';
import { ProcurarComponent } from './app/procurar/procurar.component';
import { CaronaComponent } from './app/carona/carona.component';
// Definindo as rotas
const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota inicial
  { path: 'home', component: HomeComponent },  // Rota para Home
  {path : 'procurar', component: ProcurarComponent}


];

// Inicializando a aplicação com as rotas
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Passando as rotas para o roteador
    ...appConfig.providers || [],  // Se houver configuração adicional no appConfig
  ],
}).catch((err) => console.error(err));
