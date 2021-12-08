import { Cliente } from './../model/Cliente';
import { ClienteService } from './../services/cliente-service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  lista:Cliente[] = [];
  constructor(private clienteService:ClienteService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.clienteService.listar().subscribe((cliente)=> this.lista=cliente);
  }

}
