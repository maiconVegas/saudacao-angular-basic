import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nome = '';
  cidade = '';
  saudacao = '';
  gerarSaudacao() {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.saudacao = `Bom dia, ${this.nome} de ${this.cidade}`;
    } else if (hora < 18) {
      this.saudacao = `Boa tarde, ${this.nome} de ${this.cidade}`;
    } else {
      this.saudacao = `Boa noite, ${this.nome} de ${this.cidade}`;
    }
  }
}
