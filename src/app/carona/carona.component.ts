
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-carona',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './carona.component.html',
  styleUrls: ['./carona.component.css']
})

export class CaronaComponent {
  usuariosVisiveis: boolean = false;
  local: string = '';
  destino: string = '';

  // Método para alternar a exibição dos usuários
  exibirUsuarios() {
    this.usuariosVisiveis = !this.usuariosVisiveis;
  }
}
