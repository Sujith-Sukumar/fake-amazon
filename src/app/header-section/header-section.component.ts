import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,RouterLink } from '@angular/router';


@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent implements AfterViewInit {
  @ViewChild('imageList') imageList!: ElementRef;
  @ViewChild('slideBtnLeft') slideBtnLeft!: ElementRef;
  @ViewChild('slideBtnRight') slideBtnRight!: ElementRef;
  @ViewChild('slidebar') slidebarNavigationEl!: ElementRef;
  @ViewChild('openSlider') sidebarOpenNavigationEl!: ElementRef;
  flatobj: any = {}
  constructor(private service: ProductService, private routes:Router) {
    this.flatobj = this.service.getflatarray();
    // console.log(this.flatobj);
    
  }
  filterByType(type: string): any[] {
    return Object.keys(this.flatobj)
      .filter(key => this.flatobj[key].type === type)
      .map(key => this.flatobj[key]);
  }

  startSlider = 0;
  imgItemCount = 0;

  ngAfterViewInit(): void {
    const imgItems = this.imageList.nativeElement.querySelectorAll('.image-item');
    this.imgItemCount = imgItems.length;

    this.slideBtnLeft.nativeElement.addEventListener('click', () => this.slideLeft());
    this.slideBtnRight.nativeElement.addEventListener('click', () => this.slideRight());
  }

  slideLeft(): void {
    if (this.startSlider < 0) {
      this.startSlider += 100;
      this.updateSliderPosition();
    }
  }

  slideRight(): void {
    const maxSlider = -((this.imgItemCount - 1) * 100);
    if (this.startSlider > maxSlider) {
      this.startSlider -= 100;
      this.updateSliderPosition();
    }
  }

  updateSliderPosition(): void {
    this.imageList.nativeElement.style.transform = `translateX(${this.startSlider}%)`;

  }

  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  navigatetodetails(id: string):void{
    this.routes.navigate(['/details'],{state:{flatobj:id}});
    console.log('Navigating with ID:', id);
    
  }

}
