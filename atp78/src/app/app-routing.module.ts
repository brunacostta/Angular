import { CadastroTipoClienteComponent } from './cadastro-tipo-cliente/cadastro-tipo-cliente.component';
import { ClienteListaComponent } from './../../../atp78/src/app/cliente-lista/cliente-lista.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'clientes', component: ClienteListaComponent},
  {path: 'clientes/cadastrar', component: CadastroTipoClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
