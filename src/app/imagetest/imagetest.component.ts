import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImagetestService } from './imagetest.service';

@Component({
  selector: 'app-imagetest',
  templateUrl: './imagetest.component.html',
  styleUrls: ['./imagetest.component.css']
})
export class ImagetestComponent implements OnInit {

  imageForm : FormGroup = new FormGroup({
    name : new FormControl(),
    file : new FormControl()
  });

  constructor(private imgService : ImagetestService) { }

  ngOnInit(): void {
  }

  addImg(){
    this.imgService.postImage(this.imageForm.value).subscribe((response) => {
      console.log(response);
    })
  }
}
