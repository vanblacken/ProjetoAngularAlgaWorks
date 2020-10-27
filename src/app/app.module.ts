import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFomComponent } from './funcionario-fom/funcionario-fom.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, BemVindoComponent, FuncionarioCardComponent, FuncionarioFomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
