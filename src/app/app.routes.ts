import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'shop', component: ProductslistComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'shop/:id', component: ProductDetailComponent},
    {path: '**', component: ErrorPageComponent},
];
