import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  sliceOptions = {
    start: 0,
    end: 100 as number | undefined,
    default: 100,
  };

  expandText = 'Ver mais';

  details = {
    desc: `Psicóloga com título de especialista em Psicologia Clínica e Psicologia da Saúde pelo Conselho Federal de Psicologia. Especialista em Saúde Mental e Psiquiatria pelo Hospital das Clínicas da USP. Formação em Psicopatologia.

  Psicóloga no SUS desde 2016 em serviços da rede de atenção psicossocial.`,
  };

  onExpandText(evt: any): void {
    this.sliceOptions.end =
      this.sliceOptions.end === this.sliceOptions.default
        ? undefined
        : this.sliceOptions.default;

    this.expandText = this.expandText === 'Ver mais' ? 'Ver menos' : 'Ver mais';
  }
}
