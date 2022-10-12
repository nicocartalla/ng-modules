import { Component, Input, OnInit } from '@angular/core';
import { Pic } from 'src/app/models/pic';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

  @Input() pic: Pic;
  constructor() {
    this.pic = {
      id: 0,
      description: '',
      imageSrc: ''
   }
  }

  ngOnInit(): void {
  }
  

}
