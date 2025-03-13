import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { ProductService } from '../../product.service';

import {FormGroup,FormControl,ReactiveFormsModule,FormsModule} from '@angular/forms';
@Component({
  selector: 'app-buynow',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './buynow.component.html',
  styleUrl: './buynow.component.scss'
})
export class BuynowComponent {
  searchddata:any
  constructor(private service : ProductService, private routes:Router){
    this.searchddata=history.state.data;
    console.log('we get the searched data',this.searchddata);
    
  }
  form= new FormGroup({
    country: new FormControl(''),
    fullName: new FormControl(''),
    mobile: new FormControl(''),
    pincode: new FormControl(''),
    address: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    town: new FormControl(''),
    state: new FormControl(''),
    addressType: new FormControl(''),
    deliveryInstructions: new FormControl(''),
  })

  address = {
    country: '',
    fullName: '',
    mobile: 0,
    pincode: 0,
    addressLine: '',
    area: '',
    landmark: '',
    town: '',
    state: '',
    addressType: '',
    deliveryInstructions: ''
  };

  

  
  onSubmit(){
    const  buynowData=this.form.value
    this.service.buynowdata(buynowData)
    this.routes.navigate(['/orderedproduct'],{state:{data: buynowData}})

    console.log('shipping address data',buynowData,);
    
  }
}
