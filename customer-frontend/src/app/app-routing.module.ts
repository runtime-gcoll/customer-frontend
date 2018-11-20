import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'card', component: ProductCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
