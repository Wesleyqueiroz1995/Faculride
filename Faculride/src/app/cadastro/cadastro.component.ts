import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})






export class CadastroComponent {
  tipoUsuario = 'passageiro'; // Tipo de usuário inicial
  isMotorista = false; // Variável para controlar a exibição dos campos do motorista
  anoCarroOptions: number[] = []; // Lista de opções de ano para o campo "Ano do carro"

  constructor() {
    this.inicializarAnoCarro();
  }

  // Método para alternar a exibição dos campos de motorista
  alternarCamposMotorista() {
    this.isMotorista = this.tipoUsuario === 'motorista';
  }

  // Inicializa a lista de anos para os últimos 40 anos
  inicializarAnoCarro() {
    const anoAtual = new Date().getFullYear();
    this.anoCarroOptions = Array.from({ length: 41 }, (_, i) => anoAtual - i);
  }

  // Método para criação da conta (a lógica pode ser ampliada conforme necessário)
  criarConta() {
    alert('Conta criada com sucesso!');
  }

}
