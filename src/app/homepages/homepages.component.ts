import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './homepages.component.html',
  styleUrl: './homepages.component.scss'
})
export class HomepagesComponent {

  flatobj: any = {}
  constructor(private routes: Router, private service: ProductService) {
  this.flatobj = this.service.getflatarray();

  }
  filterByType(type: string): any[] {
    return Object.keys(this.flatobj)
      .filter(key => this.flatobj[key].type === type)
      .map(key => this.flatobj[key]);
  }

  // navigateToDetails() {
  //   this.routes.navigate(['/privacypolicy']);
  //   console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
  // }
  navigatetodetails(id: string):void{
    this.routes.navigate(['/details'],{state:{flatobj:id}});
    console.log('Navigating with ID:', id);
    
  }

  scrollPosition = 0; // Keeps track of current scroll position

  scrollLeft() {
    const container = document.querySelector('.carousel-items1') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  scrollRight() {
    const container = document.querySelector('.carousel-items1') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  scrollLeft2() {
    const container = document.querySelector('.carousel-items2') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  scrollRight2() {
    const container = document.querySelector('.carousel-items2') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`;
  }

  carouselItems = Array.from({ length: 10 }, (_, i) => ({
  }));

  videowatch() {
    console.log('Video is being watched!');
  }
}