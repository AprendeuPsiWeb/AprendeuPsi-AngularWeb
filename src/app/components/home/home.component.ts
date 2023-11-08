import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  logoPath: string = 'assets/psi-logo.png';

  images = [
    {
      imageSrc: 'assets/Psicofarmacologia.png',
      imageAlt: 'Curso Psicofarmacologia',
      route: '/about-us',
    },
    {
      imageSrc: 'assets/Prontuário.jpg',
      imageAlt: 'Curso Prontuário',
      route: '/home',
    },
    {
      imageSrc: 'assets/formacao.jpeg',
      imageAlt: 'Formação SUS',
      route: '',
    },
  ];

  selectedTab: string = 'about';

  changeTab(tab: string): void {
    this.selectedTab = tab;
  }
}
