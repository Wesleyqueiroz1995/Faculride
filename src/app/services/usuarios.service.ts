import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Injetando o HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Tornando o serviço global
})
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/usuarios';  // URL da API

  constructor(private http: HttpClient) {}  // Injeção do HttpClient

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Retorna um Observable com a lista de usuários
  }
}
