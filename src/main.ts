import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';  // Importando provideRouter e Routes corretamente
import { appConfig } from './app/app.config';  // Arquivo de configuração (se existir)
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { CadastroComponent } from './app/cadastro/cadastro.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Adicionando o withInterceptorsFromDi()


const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota inicial
  { path: 'home', component: HomeComponent },  // Rota para Home
  { path: '', component: CadastroComponent },



];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),  // Fornecendo HttpClient com interceptores
    (ReactiveFormsModule),
    provideRouter(routes),  // Passando as rotas para o roteador
    ...appConfig.providers || [],  // Se houver configuração adicional no appConfig
  ],
}).catch((err) => console.error(err));
