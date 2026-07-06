import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Verifique se essa linha já existe
import { Produto } from './components/produto/produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Produto], // <-- OS DOIS PRECISAM ESTAR AQUI, SEPARADOS POR VÍRGULA!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}