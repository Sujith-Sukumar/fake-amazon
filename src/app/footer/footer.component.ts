import { Component } from '@angular/core';
import { Router, RouterLink,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  flatobj: any = {}
  constructor(private routes:Router, private service:ProductService){
  this.flatobj = this.service.getflatarray();
  }
  filterByType(type: string): any[] {
    return Object.keys(this.flatobj)
      .filter(key => this.flatobj[key].type === type)
      .map(key => this.flatobj[key]);
  }


  scrollPosition = 0; // Keeps track of current scroll position

  scrollLeft3() {
    const container = document.querySelector('.carousel-items3') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  
  scrollRight3() {
    const container = document.querySelector('.carousel-items3') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  scrollLeft4() {
    const container = document.querySelector('.carousel-items4') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  
  scrollRight4() {
    const container = document.querySelector('.carousel-items4') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  scrollLeft5() {
    const container = document.querySelector('.carousel-items5') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    this.scrollPosition = Math.max(this.scrollPosition - itemWidth, 0);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  
  scrollRight5() {
    const container = document.querySelector('.carousel-items5') as HTMLElement;
    const itemWidth = container.clientWidth; // Width of visible items
    const maxScroll = container.scrollWidth - itemWidth; // Maximum scrollable area
    this.scrollPosition = Math.min(this.scrollPosition + itemWidth, maxScroll);
    container.style.transform = `translateX(-${this.scrollPosition}px)`; // Fixed: Use backticks
  }
  

  videowatch() {
    console.log('Video is being watched!');
  }
  navigateToDetails() {
    this.routes.navigate(['/privacypolicy']);
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
    
  }
  navigatetodetails(id: string):void{
    this.routes.navigate(['/details'],{state:{flatobj:id}});
    console.log('Navigating with ID:', id);
    
  }
}


