import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagetestService {

  constructor(private httpClient : HttpClient) { }

  postImage(form_data : any){
    let url = "http://localhost:8090/image";
    return this.httpClient.post(url, form_data);
  }
}
