import { ClienteService } from './../services/cliente-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tipo-cliente',
  templateUrl: './cadastro-tipo-cliente.component.html',
  styleUrls: ['./cadastro-tipo-cliente.component.css']
})
export class CadastroTipoClienteComponent implements OnInit {
  id:number = 0;
  nome:string = "";
  sobrenome:string = "";
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }

  salvar(){
    let cliente = {
      "id": this.id,
      "nome": this.nome,
      "sobrenome": this.sobrenome
    };
    console.log(cliente)
    this.clienteService.salvar(cliente);
    this.limpar();
  }

  private limpar(){
    this.id=0;
    this.nome = "";
    this.sobrenome = "";
  }
}
