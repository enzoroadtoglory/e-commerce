import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet], // <-- OS DOIS PRECISAM ESTAR AQUI, SEPARADOS POR VÍRGULA!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'NorTech Cursos';
}