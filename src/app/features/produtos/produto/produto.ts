import { Component, Input, Output, EventEmitter} from '@angular/core';
import { UpperCasePipe, CurrencyPipe} from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe/preco-formatado-pipe';


@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, CurrencyPipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})

export class Produto {
  @Input() nome: string = '';
  @Input() preco: number = 0;

  @Output() produtoSelecionado = new EventEmitter<string>();

  selecionarProduto(){

    this.produtoSelecionado.emit(this.nome);

  }
}