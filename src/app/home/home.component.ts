import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productData : any;
  constructor(private homeService : HomeService) { }

  ngOnInit(): void {

    this.homeService.getProducts().subscribe((response) => {
      this.productData = response;
      console.table(this.productData);
    })
  }

}
