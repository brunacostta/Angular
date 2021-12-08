import { Cliente } from './../model/Cliente';
import { ClienteService } from './../services/cliente-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tipo-cliente',
  templateUrl: './cadastro-tipo-cliente.component.html',
  styleUrls: ['./cadastro-tipo-cliente.component.css']
})
export class CadastroTipoClienteComponent implements OnInit {
  cliente = {} as Cliente;

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }

  salvar(){
    this.clienteService.salvar(this.cliente).subscribe((msg)=>{
      console.log(msg)
      this.limpar();
    });
    
  }

  private limpar(){
    this.cliente = {} as Cliente;
  }
}
