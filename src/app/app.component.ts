import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aprendeupsiWebAngular';

  images = [
    {
      imageSrc:
        'https://lh5.googleusercontent.com/nreDw2mf6-vE0y7MIrytNMOdddrxF6TFm2oUAwxzD0rOLAfDqvmyFrX1ahOqCkMt9CLc8E0uL8hr_G3ygYxLmz7okKYE-c51ezekI3Kys4Q6mZhGcpiZoVJdS992QZLV9g=w1280',
      imageAlt: 'Curso Psicofarmacologia',
    },
    {
      imageSrc:
        'https://lh5.googleusercontent.com/ZSgaTarZNMufBEOJTliKPKBTjcC8jNcWyRRHMeGikIZgqoE7H3ib0KhmTLKJNOqmwwiFoxvKhjda0CD6pDMSy8XSDKJcn3f0xG7X5vtjYlhL4GiLJhYmPjIs96lUCErKRg=w1280',
      imageAlt: 'Curso Prontuário',
    },
    {
      imageSrc:
        'https://lh6.googleusercontent.com/80YXCfoC1W4sajttDdfmffGNBI2f89Nv0npP60KkkQNpbEn5Lw8ornd6JpVbfhXALunDav7UOBD5x9819toB40NTSA27pUH6NCGJnJBmTdbH4UotZ3wcfyrcWKbjbUJnEw=w1280',
      imageAlt: 'Formação SUS',
    },
  ];
}
