import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usethisadres',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shippingaddress.component.html',
  styleUrl: './shippingaddress.component.scss'
})
export class ShippingaddressComponent {
buynowdata:any
  constructor(private router : Router){
    this.buynowdata=history.state.data
    console.log('confirmed data',this.buynowdata);
    
  }

  useThisAddress() {
    this.router.navigate(['/usethisadres']); // Navigate programmatically
  }
}
