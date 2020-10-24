import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-fom',
  templateUrl: './funcionario-fom.component.html',
  styleUrls: ['./funcionario-fom.component.css']
})
export class FuncionarioFomComponent {
  nome = 'meuprojeto';
  adicionado = false;
  @Output('criado') funcionarioAdicionado = new EventEmitter
  ultimoId = 0;
  adicionar() {

    this.adicionado = true;
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario)
  }

}
