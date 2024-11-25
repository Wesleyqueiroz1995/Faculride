import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {email: string = '';
  password: string = '';
  recoverEmail: string = '';
  errorMsg: string = '';
  recoverMsg: string = '';
  loginAttempts: number = 0;
  showRecoverPasswordSection: boolean = false;

  login() {
    if (this.email === 'herivelton@gmail.com' && this.password === 'heri123') {
      localStorage.setItem('user', 'Herivelton');
      window.location.href = 'index2.html'; // ajuste conforme a navegação no Angular
    } else {
      this.loginAttempts++;
      alert(this.errorMsg = 'Senha incorreta');

      if (this.loginAttempts >= 2) {
        this.showRecoverPasswordSection = true;
      }
    }
  }

  showRecoverPassword() {
    this.showRecoverPasswordSection = true;
  }

  sendRecoverEmail() {
    if (this.recoverEmail === 'angelina@gmail.com') {
      this.recoverMsg = 'E-mail de recuperação de senha enviado com sucesso';
    } else {
      this.recoverMsg = 'E-mail não encontrado.';
    }
    this.errorMsg = '';
    this.showRecoverPasswordSection = false;
  }
}


