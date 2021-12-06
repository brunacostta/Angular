import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiposClientesComponent } from './tipos-clientes/tipos-clientes.component';
import { CadastroTipoClienteComponent } from './cadastro-tipo-cliente/cadastro-tipo-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    TiposClientesComponent,
    CadastroTipoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
