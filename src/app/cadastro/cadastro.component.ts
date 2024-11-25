import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  isMotorista: boolean = false;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      tipoUsuario: ['passageiro', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      endereco: ['', Validators.required],
      fatec: ['', Validators.required],
      ra: ['', [Validators.required, Validators.pattern(/\d{9}/)]],
      genero: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cnh: [''],
      modeloCarro: [''],
      anoCarro: [''],
      placa: [''],
    });
  }

  // Função para alternar entre campos de Passageiro e Motorista
  alternarCamposMotorista() {
    const tipoUsuario = this.cadastroForm.get('tipoUsuario')?.value;
    this.isMotorista = tipoUsuario === 'motorista';

    // Adiciona ou remove as validações dos campos de motorista
    const cnh = this.cadastroForm.get('cnh');
    const modeloCarro = this.cadastroForm.get('modeloCarro');
    const anoCarro = this.cadastroForm.get('anoCarro');
    const placa = this.cadastroForm.get('placa');

    if (this.isMotorista) {
      cnh?.setValidators([Validators.required, Validators.pattern(/\d{3}\.\d{3}\.\d{3}-\d{2}/)]);
      modeloCarro?.setValidators([Validators.required]);
      anoCarro?.setValidators([Validators.required]);
      placa?.setValidators([Validators.required, Validators.pattern(/[A-Z0-9]{7}/)]);
    } else {
      cnh?.clearValidators();
      modeloCarro?.clearValidators();
      anoCarro?.clearValidators();
      placa?.clearValidators();
    }

    // Atualiza a validade dos campos com novas validações
    cnh?.updateValueAndValidity();
    modeloCarro?.updateValueAndValidity();
    anoCarro?.updateValueAndValidity();
    placa?.updateValueAndValidity();
  }

  // Função de submissão do formulário
  onSubmit() {
    console.log('Status do formulário:', this.cadastroForm.status);
    console.log('Campos inválidos:', this.cadastroForm.invalid);

    if (this.cadastroForm.valid) {
      console.log('Formulário enviado:', this.cadastroForm.value);
      alert('Conta criada com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
      this.checkInvalidFields();
    }
  }

  // Função para verificar os campos inválidos e logar no console
  checkInvalidFields() {
    Object.keys(this.cadastroForm.controls).forEach((field) => {
      const control = this.cadastroForm.get(field);
      if (control?.invalid && control?.touched) {
        console.log(`${field} está inválido.`);
        alert(`${field} está inválido.`);
      }
    });
  }
}
