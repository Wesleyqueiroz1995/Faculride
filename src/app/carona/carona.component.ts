import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';  // Ajuste o caminho do serviço
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carona',
  standalone: true,
  imports: [CommonModule,FormsModule,],  // Inclua HttpClientModule
  templateUrl: './carona.component.html',
  styleUrls: ['./carona.component.css']
})



export class CaronaComponent {
  usuarios: any[] = []; // Lista de usuários carregados
  usuariosVisiveis: boolean = false; // Controla a exibição dos usuários
  local: string = ''; // Entrada de local do usuário
  destino: string = ''; // Entrada de destino do usuário
  cardSelecionado: number | null = null; // Índice do card selecionado

  constructor(private usuariosService: UsuariosService) {}

  // Método para carregar os usuários
  exibirUsuarios() {
    this.usuariosService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      this.usuariosVisiveis = true;
    });
  }

  // Alterna o estado de seleção do card
  selecionarCard(index: number) {
    this.cardSelecionado = this.cardSelecionado === index ? null : index;
  }

  // Ação do botão
  acaoBotao(event: MouseEvent, usuario: any) {
    event.stopPropagation(); // Evita que o clique feche o card
    console.log('Ação clicada para o usuário:', usuario);
    // Adicione a lógica desejada aqui"
    alert("um email foi enviado para ususario, troquem contatos e combinem sua corona  \u{1F60A} ")
  }
}
