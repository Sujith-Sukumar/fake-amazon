import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { FormsModule ,FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HomeComponent } from '../home/home.component';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = new FormGroup({
    mobilenumber: new FormControl(''),
    password: new FormControl(''),
  });

  isViewVisible = false;

 constructor(private router:Router,private service:UserService,){}
 signup(){
  this.router.navigate(['/signup']) 
 }

onSubmit(){
  const logindata=this.login.value
  console.log(logindata);
  
  if(this.service.verifylogindata(logindata)){
    this.isViewVisible = true;
    console.log('loginsuccessful');
    this.router.navigate(['/home']);
  }
  else{
    console.log('invalid data');
    this.isViewVisible = false;  
  }  
   
}
}
