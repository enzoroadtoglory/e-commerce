import { Component, signal, computed, effect} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe/preco-formatado-pipe';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal([
    {nome: 'Mouse Gamer', preco:67.99},
    {nome: 'Abacate Gamer', preco:12.30},
    {nome: 'Monitor Gamer', preco:666.66},
    {nome: 'Luz Gamer', preco:13.78},
    {nome: 'Luva de pedreiro Gamer', preco:34.55},
    {nome: 'Lulabolso Gamer', preco: 13.22}
  ]);

  exibirProduto(nome : string){
    console.log('Produto selecionado: ',nome);
  }

  constructor(){
    effect(() => {
        console.log('Lista de produtos alterados: ', this.produtos());
    });
    effect(() => {
        console.log('Valor total atualizado: ', this.valorTotal());
    });
    effect(() => {
        if(typeof document !== 'undefined'){
          document.title = `(${this.produtos()}) Minha loja`;
        }
    });
  }

  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual, 
      {nome:'Fone RedDragon Zeus Elite Lite', preco: 100},
      {nome:'Playstation 5 Pro', preco: 100},
      {nome:'Gta 6 DELUXE edition', preco: 100}
    ])
  }

  
  totalProdutos = computed(() => this.produtos().length);
  
  valorTotal = computed(() => {return this.produtos().reduce((total, item) => total+ item.preco, 0)});
  
  substituirProdutos(){
    this.produtos.set([{nome: 'Arroz', preco: 12}]);
  }
  
  carrinho = signal <{nome: string; preco: number}[]>([]);

  limparCarrinho(){
    this.carrinho.set([]);
  }

  adicionarAoCarrinho(produto: {nome:string; preco: number}){
    this.carrinho.update(listaAtual => [...listaAtual, produto]);
  }

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho = computed(() => {
    return this.carrinho().reduce((total, item) => total + item.preco, 0);
  });



}
