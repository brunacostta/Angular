import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroTipoClienteComponent } from './cadastro-tipo-cliente/cadastro-tipo-cliente.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TiposClientesComponent } from './tipos-clientes/tipos-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroTipoClienteComponent,
    ClienteListaComponent,
    TiposClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
