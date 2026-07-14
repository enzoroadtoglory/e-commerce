import { Component } from '@angular/core';
import { UpperCasePipe, CurrencyPipe} from '@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, CurrencyPipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})

export class Produto {
  /*
  produto = 'Placa Arduino Uno';
  preco = 59.90;
  mostrarProduto = true;
  mostrarPreco = true;
  */

  produtos = [
    { Produto: 'Mouse Logitech', preco : 259.99},
    { Produto: 'Teclado RedDragon', preco : 175.90},
    { Produto: 'Notebook Asus VivoBook 5', preco : 3489.90},
    { Produto: 'Mouse pad gamer 90x30', preco : 34.99},
    { Produto: 'Placa Arduino Uno', preco : 67.89}
  ];
}