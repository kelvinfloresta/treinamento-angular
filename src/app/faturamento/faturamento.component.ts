import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit,OnDestroy {

  faturamento;
  faturamentoInscricao;

  constructor(private faturamentoService:FaturamentoService) { }

  ngOnInit() {
    this.faturamentoInscricao = this.faturamentoService.getFaturamento()
    .subscribe( dados => this.faturamento = dados, erro => {
      
      setTimeout( () => this.ngOnInit(), 1000 )
    })
  }

  ngOnDestroy(){
    this.faturamentoInscricao.unsubscribe();
  }

}
