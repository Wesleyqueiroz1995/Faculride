
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  recoverEmail: string = '';
  errorMsg: string = '';
  recoverMsg: string = '';
  loginAttempts: number = 0;
  showRecoverPasswordSection: boolean = false;

  constructor(private router: Router) {} // Injeção do Angular Router

  login() {
    console.log('Email inserido:', this.email);
    console.log('Senha inserida:', this.password);

    if (this.email.trim() == 'herivelton@gmail.com' && this.password.trim() == 'heri123') {
      /*localStorage.setItem('user', 'Herivelton');*/
      alert('Login efetuado com sucesso!'); // Exibe o alerta de confirmação
      this.router.navigate(['/home']); // Navega para a rota "/home"
    } else {
      this.loginAttempts++;
      alert(this.errorMsg = 'Senha ou email incorretos'); // Exibe o alerta de erro

      // Exibe a seção de recuperação de senha após 2 tentativas
      if (this.loginAttempts >= 1) {
        this.showRecoverPasswordSection = true;
      }
    }
  }


  showRecoverPassword() {
    this.showRecoverPasswordSection = true;
  }

  sendRecoverEmail() {
    if (this.recoverEmail === 'herivelton@gmail.com') {
      this.recoverMsg = 'E-mail de recuperação de senha enviado com sucesso';
    } else {
      this.recoverMsg = 'E-mail não encontrado.';
    }
    this.errorMsg = '';
    this.showRecoverPasswordSection = false;
  }
}
