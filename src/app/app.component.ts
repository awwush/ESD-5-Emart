import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Emart';
  productData : any;

  constructor(private appService : AppService) {}

  base64Image : any;

  ngOnInit(): void {

    this.appService.getProducts().subscribe((response) => {
      this.productData = response;
      // console.table(this.productData);
    })

    // let imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/61jzDf1c7dL._SL1000_.jpg';

    // this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {    
    //   console.log(base64data);
    //   // this is the image as dataUrl
    //   this.base64Image = 'data:image/jpg;base64,' + base64data;
    //   // return this.base64Image;
    // });
    
  }

//   getBase64ImageFromURL(url: string) {
//     return Observable.create((observer: Observer<string>) => {
//       // create an image object
//       let img = new Image();
//       img.crossOrigin = 'Anonymous';
//       img.src = url;
//       if (!img.complete) {
//           // This will call another method that will create image from url
//           img.onload = () => {
//           observer.next(this.getBase64Image(img));
//           observer.complete();
//         };
//         img.onerror = (err) => {
//            observer.error(err);
//         };
//       } else {
//           observer.next(this.getBase64Image(img));
//           observer.complete();
//       }
//     });
//  }

 
//   getBase64Image(img: HTMLImageElement) {
//     // We create a HTML canvas object that will create a 2d image
//     var canvas = document.createElement("canvas");
//     canvas.width = 200;
//     canvas.height = 200;
//     var ctx = canvas.getContext("2d");
//     // This will draw image    
//     ctx.drawImage(img, 50, 20, 150, 150);
//     // Convert the drawn image to Data URL
//     var dataURL = canvas.toDataURL("image/png");
//  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
//  }


}
