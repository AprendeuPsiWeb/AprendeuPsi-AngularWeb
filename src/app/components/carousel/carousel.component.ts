import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
