import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome: 'Mouse Gamer', preco:67.99},
    {nome: 'Abacate Gamer', preco:12.30},
    {nome: 'Monitor Gamer', preco:666.66},
    {nome: 'Luz Gamer', preco:13.78},
    {nome: 'Luva de pedreiro Gamer', preco:34.55},
    {nome: 'Lulabolso Gamer', preco: 13.22}
  ]
}
