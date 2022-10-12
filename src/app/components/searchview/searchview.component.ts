import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/models/pic';

@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})
export class SearchviewComponent implements OnInit {
  pics: Pic[] = []
  constructor() { }

  ngOnInit(): void {
  }

  renderPics(pics: Pic[]): void {
    this.pics = pics;
  }

}
