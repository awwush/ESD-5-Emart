import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';
import { HomeComponent } from './home/home.component';
import { ImagetestComponent } from './imagetest/imagetest.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'product', component: ProductComponent },
  {path: 'home/product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
