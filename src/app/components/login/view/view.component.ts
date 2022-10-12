import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onUsernameInput(value: string) {
    this.username = value;
    console.log(value);
  }

  onPasswordInput(value: string) {
    this.password = value;
    console.log(value);
  }
}
