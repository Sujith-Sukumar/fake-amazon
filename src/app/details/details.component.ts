import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { CommonModule,JsonPipe, KeyValuePipe } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,JsonPipe,KeyValuePipe,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  isModalVisible: boolean = false;
  product:any;
  recievedData:any;
  cartService: any;
  iddata:any;
  searchddata:any;
  displayedkeys = ['item', 'price', 'warrenty', 'availability', 'brand','color','itemweight','material','SpecialFeature'];

  constructor(private routes: Router,private Service: ProductService){
   this.iddata=history.state.flatobj
   console.log('iddata',this.iddata);

   this.searchddata=this.Service.serchingid(this.iddata)
   console.log('serchddata',this.searchddata);

  }
  getfilteredkeys(){
    return Object.entries(this.searchddata)
    .filter(([key, value])=> this.displayedkeys.includes(key));
  }
  navigateToBuyNow() {
    this.routes.navigate(['/buynow'],{state:{data: this.searchddata}}) 

   // this.router.navigate(['/buynow']);    
  }
  
  navigateCart(){
    this.isModalVisible = true;
    let cart=JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem=cart.find((item: { item: any; })=>item.item===this.searchddata.item)

    if(!existingItem){
      cart.push(this.searchddata);
      localStorage.setItem('cart', JSON.stringify(cart));
    }else {
      // Optionally, show a message or handle the case where the item already exists
      console.log('Item already in the cart!');
    }

    // this.routes.navigate(['/car'],{state:{data: this.searchddata}})
  }
  openModal() {
    this.isModalVisible = true; // Show the modal
  
    setTimeout(() => {
      this.closeModal(); // Automatically close after 2 seconds
    }, 1500); // 2000ms = 2 seconds
  }
  closeModal() {
    this.isModalVisible = false;
  }
  thumbnails = [
    { src: 'Acscnd.jpg', alt: 'Thumbnail 1' },
    { src: 'acthird.jpg', alt: 'Thumbnail 2' },
    { src: 'acfourth.jpg', alt: 'Thumbnail 3' },
    { src: 'acfive.jpg', alt: 'Thumbnail 4' },
  ];
  sponsoredImage = 'lgadd.avif';

    
  iconimg = {
    features: [
      {
        icon: '1yearwrntyicon.png', 
        alt: 'Feature 1',
        text: '1 year warranty.'
      },
      {
        icon: 'returnpolityicon.png', 
        alt: 'Feature 2',
        text: 'Return Policy.'
      },
      {
        icon: 'topbrandicon.png', 
        alt: 'Feature 3',
        text: '10 Days Replacement by Brand.'
      }
    ]
  };

  onAddToCart() {
    const item = {
      id: 1,
      name: 'Sample Product',
      price: 100,
    }; // Replace with actual data
    this.cartService.addToCart(item);
  }
}
