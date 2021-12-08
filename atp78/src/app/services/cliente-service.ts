import { Cliente } from './../model/Cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8090/api/cadastroCliente'
  }

  salvar(tipoCliente:Cliente):Observable<string>{
      return this.httpClient.post(this.url, tipoCliente, {responseType: 'text'});
  }

  listar():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url);
  }
}
