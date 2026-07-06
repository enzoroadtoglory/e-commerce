import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produto = 'Placa Arduino Uno';
  preco = 59.90;
  mostrarProduto = true;
  mostrarPreco = true;
}
