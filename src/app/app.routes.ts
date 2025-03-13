import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { SeemoreComponent } from './seemore/seemore.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { DetailsComponent } from './details/details.component';
import { BuynowComponent } from './details/buynow/buynow.component';
import { ShippingaddressComponent } from './details/shippingaddress/shippingaddress.component';
import { CartComponent } from './details/cart/cart.component';
import { OrderedproductComponent } from './orderedproduct/orderedproduct.component';


export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent},
    {path:'customerservice',component:CustomerserviceComponent},
    {path:'privacypolicy',component:PrivacypolicyComponent},
    {path:'seemore',component:SeemoreComponent},
    {path:'headersec',component:HeaderSectionComponent},
    {path:'details',component:DetailsComponent},
    {path:'buynow',component:BuynowComponent},
    {path:'shippingaddress',component:ShippingaddressComponent},
    {path:'cart',component:CartComponent},
    {path:'orderedproduct',component:OrderedproductComponent}

    




];
