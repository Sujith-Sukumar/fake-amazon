import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  sercheddata: any
  flatobj: any
  cartItems: any[] = []
  constructor(private service: ProductService, private routes: Router) {

    this.flatobj = this.service.getflatarray();


    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log('cart Items', this.cartItems);


  }
  navigatetodetails(id: string): void {
    this.routes.navigate(['/details'], { state: { flatobj: id } });
    console.log('Navigating with ID:', id);

  }
  removeItem(index: number) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartItems = cart;
  }
}
