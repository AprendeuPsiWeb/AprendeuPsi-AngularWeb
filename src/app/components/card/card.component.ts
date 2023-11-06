import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  laisDescription = `Psicóloga com título de especialista em Psicologia Clínica e Psicologia da Saúde pelo Conselho Federal de Psicologia. Especialista em Saúde Mental e Psiquiatria pelo Hospital das Clínicas da USP. Formação em Psicopatologia.

  Psicóloga no SUS desde 2016 em serviços da rede de atenção psicossocial.`;
}
