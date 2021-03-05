import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient : HttpClient) { }

  getProducts(){
    let url= "http://localhost:8090/products";
    return this.httpClient.get(url);
  }
}
