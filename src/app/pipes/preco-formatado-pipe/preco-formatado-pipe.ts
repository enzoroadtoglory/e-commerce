import { Component, Pipe } from '@angular/core';
import { PipeTransform} from '@angular/core';

@Pipe({
  name: 'precoformatado',}
)
export class PrecoFormatadoPipe {
  transform(valor: number) : string{
    return 'R$ '+valor.toFixed(2);
  }
}
