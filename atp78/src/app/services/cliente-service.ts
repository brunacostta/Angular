import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private lista:any[];

  constructor() {
    this.lista = [];
  }

  salvar(tipoCliente:any):void{
    this.lista.push(tipoCliente)
  }

  listar():any[]{
    return this.lista;
  }
}
