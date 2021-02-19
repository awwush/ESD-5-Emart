import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';
import { ImagetestComponent } from './imagetest/imagetest.component';

const routes: Routes = [
  {path : "ayurveda", component : AyurvedaComponent},
  {path : "imagetest", component : ImagetestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
