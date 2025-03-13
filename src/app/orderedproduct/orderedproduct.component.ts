import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderedproduct',
  standalone: true,
  imports: [],
  templateUrl: './orderedproduct.component.html',
  styleUrl: './orderedproduct.component.scss'
})
export class OrderedproductComponent {
  orderedData:any
constructor(private routes:Router){
this.orderedData=history.state.data
console.log('ordereddataget',this.orderedData);

}
}
