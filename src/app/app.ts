import { Component, signal } from '@angular/core';
import { Produto } from './components/produto/produto';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [ListaProdutos], // <-- OS DOIS PRECISAM ESTAR AQUI, SEPARADOS POR VÍRGULA!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}